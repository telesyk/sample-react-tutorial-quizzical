/* eslint-disable import/prefer-default-export */
import { nanoid } from "nanoid";

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
      answers: [...answers],
      id: nanoid(),
    };
  });
}

export { extendQuestionsWithAnswers };
