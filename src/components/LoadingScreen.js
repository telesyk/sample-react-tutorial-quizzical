/* eslint-disable react/prop-types */
import React from "react";
import logo from "../logo.svg";

export default function StartScreen() {
  return (
    <div className="p-10 shadow-lg rounded-lg backdrop-blur-sm bg-white/30 text-center">
      <img src={logo} className="w-16 h-16 mx-auto" alt="logo" />
      <p className="mt-2 mb-5 text-2xl font-bold">Quizzical</p>
      <button
        type="button"
        className="flex items-center justify-center w-48 py-3 min-w-fit transition ease-in-out duration-150 cursor-progress"
        disabled=""
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Processing...
      </button>
    </div>
  );
}
