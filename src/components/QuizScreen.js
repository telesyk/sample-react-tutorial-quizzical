/* eslint-disable react/prop-types */
import React from "react";
import Quiz from "./Quiz";

export default function QuizScreen({
  questions,
  handleFinish,
  handleAnswerClick,
  handleResetQuiz,
  isShowedResults,
  score,
}) {
  const textScore =
    // eslint-disable-next-line no-nested-ternary
    score < 5 ? "low" : score >= 5 && score < 10 ? "good" : "best";

  return (
    <div className="container">
      <div className="p-10 shadow-lg rounded-lg backdrop-blur-sm bg-white/30">
        <p className="mb-4">The questions</p>
        <div className="flex flex-wrap">
          {questions.map((item) => (
            <Quiz
              key={item.question}
              data={item}
              handleClick={handleAnswerClick}
            />
          ))}
        </div>
        {!isShowedResults ? (
          <div className="flex justify-end">
            <button
              type="button"
              className="w-48 py-3 min-w-fit rounded-md shadow-md bg-gradient-to-r from-sky-500 to-blue-500 hover:from-cayn-500 hover:to-sky-600"
              onClick={handleFinish}
            >
              Finish Quiz
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div>
              <p className="py-1 border-b-2">
                Your score is: <strong>{textScore}</strong>
              </p>
              <p className="py-1">
                Total result: <strong>{score}/</strong>
                {questions.length}
              </p>
            </div>
            <button
              type="button"
              className="w-48 py-3 min-w-fit rounded-md shadow-md bg-gradient-to-r from-sky-500 to-blue-500 hover:from-cayn-500 hover:to-sky-600"
              onClick={handleResetQuiz}
            >
              Reset Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
