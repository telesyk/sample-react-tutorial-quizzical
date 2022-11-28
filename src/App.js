import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";

function App() {
  const [isStart, setStart] = useState(true);

  const onStartQuiz = () => {
    setStart((prevState) => !prevState);
  };

  const onFinishQuiz = () => {
    setStart((prevState) => !prevState);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-50">
      <div className="flex justify-center items-center min-h-screen p-10">
        {isStart && <StartScreen handleStart={onStartQuiz} />}
        {!isStart && <QuizScreen handleFinish={onFinishQuiz} />}
      </div>
    </div>
  );
}

export default App;
