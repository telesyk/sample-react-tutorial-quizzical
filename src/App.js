/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";

const QUIZ_API = "https://opentdb.com/api.php?amount=10";
// const TEST = '';
// https://opentdb.com/api.php?amount=10
// Category loopup
// https://opentdb.com/api_category.php
// Global Question Count Lookup: Returns the number of ALL questions in the database.
// https://opentdb.com/api_count_global.php

function App() {
  const [isStart, setStart] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(QUIZ_API)
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData.results))
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

  const onStartQuiz = () => {
    setStart((prevState) => !prevState);
  };

  const onFinishQuiz = () => {
    setStart((prevState) => !prevState);
  };

  return (
    <div className="bg-purple-500 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-50">
      <div className="flex justify-center items-center min-h-screen p-10">
        {isStart && <StartScreen handleStart={onStartQuiz} />}
        {!isStart && data && (
          <QuizScreen data={data} handleFinish={onFinishQuiz} />
        )}
      </div>
    </div>
  );
}

export default App;
