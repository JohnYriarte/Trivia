import React from 'react';
import './Answer.css';

const Answer = ({ answer }) => {
    return (
        <button className="answer">{answer}</button>
    )
}

export default Answer;