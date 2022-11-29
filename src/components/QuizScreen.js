/* eslint-disable react/prop-types */
import React from "react";
import Quiz from "./Quiz";

export default function QuizScreen({ data, handleFinish }) {
  return (
    <div className="container">
      <div className="p-10 shadow-lg rounded-lg backdrop-blur-sm bg-white/30">
        <p className="mb-4">The questions</p>
        <div className="flex flex-wrap">
          {data.map((quiz) => (
            <Quiz key={quiz.question} data={quiz} />
          ))}
        </div>
        <button
          type="button"
          className="w-48 py-3 min-w-fit rounded-md shadow-md bg-gradient-to-r from-sky-500 to-blue-500 hover:from-cayn-500 hover:to-sky-600"
          onClick={handleFinish}
        >
          Finish Quiz
        </button>
      </div>
    </div>
  );
}
