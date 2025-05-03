import React from 'react';
import './Button.css';

const Button = ( { onClick,variant, message } ) => {

    const variants = {
        easy: "easy",
        medium: "medium",
        hard: "hard"
    }

    return (
        <button onClick={() => onClick(variants[variant])} className={`custom-btn ${variants[variant] || ""}`}>{message?.toUpperCase()}</button>
    );
}

export default Button;