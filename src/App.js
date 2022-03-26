import './App.css';
import {useState} from 'react'
import {questionData} from './Question'
import  Modal  from './Modal'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0) 
  const [correct, setCorrect] = useState(0)
  const [ans, setAns] = useState(0)
  const [show, setShow] = useState(false)
  const [qRes, setQRest] = useState([])

  const nextQuestion = (boolean, {option, isCorrect}) => {
    setCurrentQuestion(currentQuestion === questionData.length - 1 ? questionData.length - 1 : currentQuestion + 1)
    setAns(ans === 4 ? 4 : ans + 1)
    setCorrect(() => {
      if(ans === 4) return correct
      return boolean === true ? correct + 1 : correct})
    setQRest(() => {
      if(ans === 4) return qRes
      return [...qRes, {option, isCorrect}]
    })
  }

  const seeResults = () => {
    setShow(show ? false : true)
  }

  const resetQuizz = () => {
    setCurrentQuestion(0)
    setCorrect(0)
    setAns(0)
    setShow(false)
    setQRest([])
  }

  return (
<div className="App">
    <div className='question-container'>
        <div className='question-counter'>
            <h1>
                Question {currentQuestion + 1}/{questionData.length}
            </h1>
        </div>
        <div className='question'>
            <div className='q'>
              <h3>{questionData[currentQuestion].question}</h3>
            </div>
            <div className='options-container'>
              {questionData[currentQuestion].answerOption.map((q, index) => (
              <button className='option' onClick={() => nextQuestion(q.isCorrect, q)} key={index}>{index + 1}. {q.option}</button>
              ))}
            </div>
        </div>
        
    </div>
    {ans === 4 && (
        <div className='btns'>
          <button className='results' onClick={seeResults}>
            Show results
          </button>
          <button onClick={resetQuizz}>
          Reset
          </button>
        </div>
      )}
      <Modal show={show} qRes={qRes} correct={correct}/>
</div>
  );
}

export default App;
