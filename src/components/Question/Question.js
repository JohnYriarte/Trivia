import React from "react";
import "./Question.css";

const Question = ({ question }) => {
  return (
    <div className="question-wrapper text-center flex-center">
      {question}
    </div>
  );
};

export default Question;
