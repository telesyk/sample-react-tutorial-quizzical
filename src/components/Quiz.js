/* eslint-disable react/prop-types */
import React from "react";
import Answer from "./Answer";

export default function Quiz({ data, handleClick }) {
  const { question, answers, category, id } = data;

  const renderAnswers = answers.map((answer) => {
    let classes = answer.isChecked
      ? "bg-sky-800 cursor-pointer"
      : "border-cyan-800 hover:bg-cyan-700 cursor-pointer";
    let isDisabled = false;

    if (answer.isCorrect !== undefined && answer.isCorrect !== null) {
      classes = answer.isCorrect ? "bg-green-700" : "bg-pink-800";
      isDisabled = true;
    }

    if (answer.isCorrect === null) {
      classes = "text-gray-100";
      isDisabled = true;
    }

    return (
      <Answer
        key={answer.value}
        onClick={() => handleClick(id, answer.id)}
        value={answer.value}
        className={classes}
        isDisabled={isDisabled}
      />
    );
  });

  return (
    <div className="mt-2 mb-4 pb-4 border-b-2 flex-1 basis-full min-w-full">
      <p className="mb-2 text-sm font-light">Category: {category}</p>
      <p
        className="mb-3 text-lg font-semibold"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="flex flex-wrap gap-4">{renderAnswers}</div>
    </div>
  );
}
