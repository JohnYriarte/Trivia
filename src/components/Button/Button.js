import React from 'react';
import ''

const Button = ( {variant, message } ) => {

    const variants = {
        easy: "easy",
        medium: "medium",
        hard: "hard"
    }

    return (
        <button className={`custom-btn ${variants[variant] || ""}`}>{message?.toUpperCase()}</button>

    );
}

export default Button;