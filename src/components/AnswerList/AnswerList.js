import React from "react";
import "./AnswerList.css";
import { decode } from "he";
import Button from "../Button/Button";

const AnswerList = ({ correct_answer, answers, onHasSelectedClick, hasSelected }) => {
  return (
    <div className="answers-wrapper">
      {answers.map((answer) => {
        return (
          <Button key={answer}
          variant="primary"
        className={`fs-small ${(hasSelected && answer === correct_answer) ? "easy" : "medium"}`}
          onClick={() => {onHasSelectedClick(true); console.log(hasSelected)}}
          >
            {decode(answer)}
          </Button>
        );
      })}
    </div>
  );
};

export default AnswerList;
