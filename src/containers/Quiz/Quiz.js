import './Quiz.css'
import React, { useState } from 'react'

const Quiz = ( {questions}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextQuestion = () => {
        setCurrentIndex((curr) => (curr + 1) < questions.length ? curr +1 : curr);
    }

    return (
        <div className="text-center fs-large app-wrapper">
            <div>
                
            </div>
            <Question />
            <Answers />
        </div>
    ) 
}

export default Quiz;
