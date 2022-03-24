import './App.css';
import {useState} from 'react'
import {questionData} from './Question'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0) 
  const [correct, setCorrect] = useState(0)
  const [ans, setAns] = useState(0)
  const [show, setShow] = useState(false)
  const [chances, setChances] = useState(1)
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
    setChances(chances - 1)
    if(chances <= 0) return alert('You do not have more chances')
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
            <h3>{questionData[currentQuestion].question}</h3>
            {questionData[currentQuestion].answerOption.map((q, index) => (
            <button className='option' onClick={() => nextQuestion(q.isCorrect, q)} key={index}>{q.option}</button>
            ))}

        </div>
        {ans === 4 && (
        <div className='btns'>
          <button className='results' onClick={seeResults}>
            Show results
          </button>
          <button onClick={resetQuizz}>
          Try one more time
          </button>
        </div>
        )}
        {show && (
        <h4>Total of correct answers: {correct}</h4>
        )}
        {show && (
              <div>
              <table style={{ borderCollapse: 'collapse', width: '50%', cursor: 'default' }}>
                  <thead>
                    <tr>
                    <th style={{ border: '1px solid black', width: '50%' }} >Question</th>
                    <th style={{ border: '1px solid black', width: '25%' }}>Option</th>
                    <th style={{ border: '1px solid black', width: '25%' }}>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                  {qRes.map((r, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid black' }}>{questionData[index].question}</td>
                      <td style={{ border: '1px solid black' }}>{r.option}</td>
                      <td style={{ border: '1px solid black' }}>{r.isCorrect ? 'Correct' : 'Incorrect'}</td>
                    </tr>
                  ))}
                  </tbody>
              </table>
            </div>
        )}
    </div>
</div>
  );
}

export default App;
