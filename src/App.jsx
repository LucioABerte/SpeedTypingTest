import React, {useState, useEffect, useRef} from 'react'
import './App.css'


function App() {
  const START_GAME = 5

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(START_GAME)
  const [isTimeRunning, setIsTimeRuning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const boxRef = useRef(null)

  
  function startGame() {
    setIsTimeRuning(true)
    setTimeRemaining(START_GAME)
    setText("")
    setWordCount(0)
    boxRef.current.disabled = false
    boxRef.current.focus()
  }

  function endGame() {
    setIsTimeRuning(false)
    setWordCount(calculateWordCount(text))
  }
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  
  function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
  }
  

  useEffect(() => {
      if(isTimeRunning && timeRemaining > 0 ) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
      } else if (timeRemaining === 0) {
            endGame()
      }
  }, [timeRemaining, isTimeRunning])
  
  return (
        <div>
            <h1>Speed Typing Test</h1>
            <textarea
            ref={boxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            > Start 
            </button>
            <h4>Word count: {wordCount}</h4>
        </div>
  )
}

export default App
