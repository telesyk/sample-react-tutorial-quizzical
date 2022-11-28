/* eslint-disable react/prop-types */
import React from "react";
import Quiz from "./Quiz";

export default function QuizScreen({ handleFinish }) {
  return (
    <div className="container">
      <div className="px-5 py-10 shadow-lg rounded-lg backdrop-blur-sm bg-white/30">
        <div className="flex flex-col items-center">
          <p>The questions</p>
          <Quiz />
          <button
            type="button"
            className="w-48 py-3 min-w-fit rounded-md shadow-md bg-gradient-to-r from-sky-500 to-blue-500 hover:from-cayn-500 hover:to-sky-600"
            onClick={handleFinish}
          >
            Finish Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
