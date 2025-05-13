import React from "react";
import "./AnswerList.css";
import Answer from "../Answer/Answer";
import Button from "../Button/Button";

const AnswerList = ({ answers, onHasSelectedClick, hasSelected }) => {
  return (
    <div className="answers-wrapper">
      {answers.map((answer) => {
        return (
          <Button key={answer}
          variant="primary"
          className="medium fs-small"
          onClick={() => {onHasSelectedClick(true); console.log(hasSelected)}}
          >
            {answer}
          </Button>
        );
      })}
    </div>
  );
};

export default AnswerList;
