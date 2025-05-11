import "./DifficultySelector.css";
import React from "react";
import Button from "../Button/Button";

const DifficultySelector = ({ onClick }) => {
  const difficulties = [
    {text:"easy", param:"easy", style:"easy"},
    {text:"medium", param:"medium", style:"medium"},
    {text:"hard", param:"hard", style:"hard"},
  ];

  return (
    <div className="flex-center gap-sm fs-medium">
      {difficulties.map(({text, param, style}) => {
        return <Button
        key={param}
        variant="primary"
        onClick={() => onClick(param)}
        className={style}
        >
          {text}
        </Button>;
      })}
    </div>
  );
};

export default DifficultySelector;
