import React from 'react';
import './Button.css';

const Button = ( {fontSize, variant, message } ) => {

    const variants = {
        easy: "easy",
        medium: "medium",
        hard: "hard"
    }

    return (
        <button className={`custom-btn ${fontSize || "fs-small"} ${variants[variant] || ""}`}>{message?.toUpperCase()}</button>

    );
}

export default Button;