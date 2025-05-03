import './DifficultySelector.css'
import React from 'react'
import Button from '../Button/Button'
import Button2 from '../Button2/Button2'

const DifficultySelector = ({ onClick }) => {

    return (
      <div className="flex-center gap-sm fs-small">
        <Button onClick={onClick} variant="easy" message="Easy"/>
        <Button onClick={onClick} variant="medium" message="Medium"/>
        <Button onClick={onClick} variant="hard" message="Hard"/>
      </div>
    )
}

export default DifficultySelector;