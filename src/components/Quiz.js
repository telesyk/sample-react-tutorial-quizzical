/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from "react";

export default function Quiz({ data }) {
  const { question, correct_answer, incorrect_answers, category } = data;
  const answers = [...incorrect_answers, correct_answer];
  return (
    <div className="mt-2 mb-4 pb-4 border-b-2 flex-1 basis-full min-w-full">
      <p className="mb-2 text-sm font-light">Category: {category}</p>
      <p className="mb-3 text-lg font-semibold">{question}</p>
      <div className="flex flex-wrap gap-4">
        {answers.map((answer) => (
          <span
            key={answer}
            className="rounded border border-cyan-800 px-2 py-1 text-sm cursor-pointer hover:bg-cyan-600"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
}
