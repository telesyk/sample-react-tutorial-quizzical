/* eslint-disable react/prop-types */
import React from "react";
import logo from "../logo.svg";

export default function StartScreen({ handleStart }) {
  return (
    <div className="p-10 shadow-lg rounded-lg backdrop-blur-sm bg-white/30 text-center">
      <img src={logo} className="w-16 h-16 mx-auto" alt="logo" />
      <p className="mt-2 mb-5 text-2xl font-bold">Quizzical</p>
      <button
        type="button"
        className="w-48 py-3 min-w-full rounded-md shadow-md bg-gradient-to-r from-sky-500 to-blue-500 hover:from-cayn-500 hover:to-sky-600"
        onClick={handleStart}
      >
        Start Quiz
      </button>
    </div>
  );
}
