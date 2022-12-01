/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { nanoid } from "nanoid";

function getShuffledArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function extendAnswers(answers) {
  return answers.map((answer) => ({
    value: answer,
    isChecked: false,
    id: nanoid(),
  }));
}

function extendQuestionsWithAnswers(questions) {
  return questions.map((question) => {
    const updatedAnswers = extendAnswers(question.incorrect_answers);
    const answers = [
      ...updatedAnswers,
      {
        value: question.correct_answer,
        isChecked: false,
        id: nanoid(),
      },
    ];

    return {
      ...question,
      answers: getShuffledArray([...answers]),
      id: nanoid(),
    };
  });
}

export { extendQuestionsWithAnswers };
