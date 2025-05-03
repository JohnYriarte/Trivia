import React from 'react';
import './Button2.css';

const Button2 = ( {message} ) => {

    return (
        <button className={`custom-btn`}>{message?.toUpperCase()}</button>
    );
}

export default Button2;