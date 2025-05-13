import "./Quiz.css";
import React, { useState, useEffect } from "react";
import { decode } from "he";
import Question from "../../components/Question/Question";
import AnswerList from "../../components/AnswerList/AnswerList";
import Button from "../../components/Button/Button";

const Quiz = ({ questions, onMenuClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [hasSelected, setHasSelected] = useState(false)

  const questionObj = questions[currentIndex];
  const difficulty = questionObj.difficulty;
  const category = decode(questionObj.category);
  const question = decode(questionObj.question);
  const correct_answer = decodeURI(questionObj.correct_answer);
  const answers = [correct_answer, ...questionObj.incorrect_answers];

  const handlerNextClick = () => {
    setCurrentIndex((curr) => (curr + 1 < questions.length ? curr + 1 : curr));
    setHasSelected(false);
  };

  useEffect(() => {
    if (currentIndex === questions.length - 1) {
      setIsLast(true);
    }
  }, [currentIndex, questions]);

  return (
    <div className="app-wrapper fs-small">
      <Button
        disabled={!hasSelected}
        variant="secondary"
        className={`next ${isLast ? "hard" : "easy"}`}
        onClick={isLast ? onMenuClick : handlerNextClick}
      >
        {isLast ? "Menu" : "Next"}
      </Button>

      <div className="fs-small">
        <div className="question-details text-center">
          <p className="detail flex-center">
            {currentIndex + 1}/{questions.length} {difficulty}
          </p>
          <p className="detail flex-center">{category}</p>
        </div>
        <Question question={question} />
      </div>

      <AnswerList answers={answers}
      hasSelected={hasSelected}
      onHasSelectedClick={setHasSelected}
      onNextQuestionClick={handlerNextClick} />
    </div>
  );
};

export default Quiz;
