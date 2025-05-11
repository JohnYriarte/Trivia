import DifficultySelector from '../DifficultySelector/DifficultySelector'
import React from 'react'
import './StartPage.css'

const StartPage = ({ onClick }) => {

    return (
        <div className="text-center app-wrapper">
            <h1>Welcome To Trivia World</h1>
            <h2>Test your knowledge across categories</h2>
            <DifficultySelector onClick={onClick}/>
        </div>
    )
}
export default StartPage;