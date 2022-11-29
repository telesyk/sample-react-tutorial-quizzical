/* eslint-disable no-console */
import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import LoadingScreen from "./components/LoadingScreen";
import QuizScreen from "./components/QuizScreen";
import { extendQuestionsWithAnswers } from "./helpers";

const QUIZ_API = "https://opentdb.com/api.php?amount=10";
// https://opentdb.com/api.php?amount=10
// Category loopup
// https://opentdb.com/api_category.php
// Global Question Count Lookup: Returns the number of ALL questions in the database.
// https://opentdb.com/api_count_global.php

function App() {
  const [questions, setQuestions] = useState([]);
  const [isStart, setStart] = useState(true);
  const [isQuizResults, setQuizResult] = useState(false);
  const [score, setScore] = useState(0);

  const onStartQuiz = () => {
    setScore(0);
    setStart((prevState) => !prevState);
    fetch(QUIZ_API)
      .then((res) => res.json())
      .then((jsonData) => {
        if (jsonData)
          setQuestions(extendQuestionsWithAnswers(jsonData.results));
      })
      .catch((error) => console.error(error));
  };

  const onFinishQuiz = () => {
    setQuizResult((prevState) => !prevState);

    setQuestions((prevData) => {
      let points = 0;
      return prevData.map((question) => ({
        ...question,
        answers: question.answers.map((answer) => {
          if (answer.value === question.correct_answer && answer.isChecked) {
            points += 1;
            setScore(points);
          }

          if (answer.value === question.correct_answer) {
            return {
              ...answer,
              isCorrect: true,
            };
          }

          if (answer.value !== question.correct_answer && answer.isChecked) {
            return {
              ...answer,
              isCorrect: false,
            };
          }

          return {
            ...answer,
            isCorrect: null,
          };
        }),
      }));
    });
  };

  const onResetQuiz = () => {
    setStart((prevState) => !prevState);
    setQuizResult((prevState) => !prevState);
    setScore(0);
  };

  const onAnswerClick = (qId, aId) => {
    setQuestions((prevData) =>
      prevData.map((item) => {
        if (item.id !== qId) return item;
        return {
          ...item,
          answers: item.answers.map((answer) => {
            if (answer.id !== aId)
              return {
                ...answer,
                isChecked: false,
              };
            return {
              ...answer,
              isChecked: !answer.isChecked,
            };
          }),
        };
      })
    );
  };

  return (
    <div className="bg-purple-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-50">
      <div className="flex justify-center items-center min-h-screen p-10">
        {isStart && <StartScreen handleStart={onStartQuiz} />}
        {!isStart && (!questions || !questions.length > 0) && <LoadingScreen />}
        {!isStart && questions.length > 0 && (
          <QuizScreen
            questions={questions}
            handleAnswerClick={onAnswerClick}
            handleFinish={onFinishQuiz}
            handleResetQuiz={onResetQuiz}
            isShowedResults={isQuizResults}
            score={score}
          />
        )}
      </div>
    </div>
  );
}

export default App;
