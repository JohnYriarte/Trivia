import "./Quiz.css";
import React, { useState } from "react";
import { decode } from "he";
import Question from "../../components/Question/Question";

const Quiz = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLast, setIsLast] = useState(false);

  const questionObj = questions[currentIndex];
  const difficulty = questionObj.difficulty;
  const category = decode(questionObj.category);
  const question = decode(questionObj.question);
  const correct_answer = decodeURI(questionObj.correct_answer);

  const answers = [
    correct_answer,
    ...questionObj.incorrect_answers,
  ];

  const nextQuestion = () => {
    setCurrentIndex((curr) => (curr + 1 < questions.length ? curr + 1 : curr));
    if (currentIndex === questions.length - 1) {
      setIsLast(true);
    }
  };

  return (
    <div className="fs-large app-wrapper">
      <div className="">
        <div className="question-details fs-small text-center">
          <p className="detail flex-center">{difficulty}</p>
          <p className="detail flex-center">{category}</p>
        </div>
        <Question question={question} />
      </div>

      {/* <Answers /> */}
    </div>
  );
};

export default Quiz;
