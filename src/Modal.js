import React from 'react'
import {questionData} from './Question'
import './Modal.css'

const Modal = ({ show, qRes, correct }) => {
  return (
    <div className={show ? 'modal active' : 'modal'}>
        {show && (
        <h4>Total of correct answers: {correct}</h4>
        )}
        {show && (
              <div className='table'>
              <table style={{ borderCollapse: 'collapse', width: '100%', cursor: 'default' }}>
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
                      <td style={{ border: '1px solid black', color: r.isCorrect? 'green' : 'red' }}>{r.isCorrect ? 'Correct' : 'Incorrect'}</td>
                    </tr>
                  ))}
                  </tbody>
              </table>
            </div>
        )}
    </div>
  )
}

export default Modal