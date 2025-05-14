import './styles/App.css'
import { useState } from 'react'
import StartPage from './components/StartPage/StartPage'
import Quiz from './containers/Quiz/Quiz'

function App() {
  const [questions, setQuestions] = useState([]);
  
  const getQuestions = (difficulty) => {
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`)
    .then(res => res.json())
    .then(data => {
      setQuestions(data.results)
    })
  }

  return (
    <div className="container">
    {questions?.length > 0  ? <Quiz questions={questions} onMenuClick={setQuestions}/> : <StartPage onClick={getQuestions}/>}
    </div>
  );
}

export default App;
