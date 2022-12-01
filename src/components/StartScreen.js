/* eslint-disable react/prop-types */
import React from "react";
import logo from "../logo.svg";

export default function StartScreen({
  questionsAmount,
  categories,
  difficulties,
  handleStart,
  handleAmountChange,
  handleCategoryChange,
  handleDifficultyChange,
}) {
  const onCategoryChange = (event) => handleCategoryChange(event.target.value);
  const onAmountChange = (event) => handleAmountChange(event.target.value);
  const onDifficultyChange = (event) =>
    handleDifficultyChange(event.target.value);

  return (
    <div className="p-10 shadow-lg rounded-lg backdrop-blur-sm bg-white/30 text-center">
      <img src={logo} className="w-16 h-16 mx-auto" alt="logo" />
      <p className="mt-2 mb-5 text-2xl font-bold">Quizzical</p>
      {/* Select category */}
      <p className="mb-2">Select category</p>
      <select
        name="selectCategory"
        id="selectCategory"
        className="mb-4 py-3 px-2 min-w-full rounded-md bg-sky-700 text-white"
        onChange={onCategoryChange}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      {/* Select category */}
      <p className="mb-2">Select difficulty</p>
      <select
        name="selectDifficulty"
        id="selectDifficulty"
        className="mb-5 py-3 px-2 min-w-full rounded-md bg-sky-700 text-white"
        onChange={onDifficultyChange}
      >
        {difficulties.map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>
      {/* Select amount */}
      <p className="mb-2">Select amount of questions</p>
      <select
        name="selectAmount"
        id="selectAmount"
        className="mb-5 py-3 px-2 min-w-full rounded-md bg-sky-700 text-white"
        onChange={onAmountChange}
      >
        {questionsAmount.map((amount) => (
          <option key={amount} value={amount}>
            {amount}
          </option>
        ))}
      </select>
      {/* Button Submit */}
      <button
        type="button"
        className="w-48 mt-6 py-3 min-w-full rounded-md shadow-md bg-gradient-to-r from-sky-500 to-blue-500 hover:from-cayn-500 hover:to-sky-600"
        onClick={handleStart}
      >
        Start Quiz
      </button>
    </div>
  );
}
