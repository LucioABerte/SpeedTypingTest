import React, {useState, useEffect} from 'react'
import './App.css'


function App() {
  const START_GAME = 5

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(START_GAME)
  const [start, setStart] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  
  function startGame() {
    setStart(true)
    setTimeRemaining(START_GAME)
    setText("")
    setWordCount(0)
  }

  function endGame() {
    setStart(false)
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
      if(start && timeRemaining > 0 ) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
      } else if (timeRemaining === 0) {
            endGame()
      }
  }, [timeRemaining, start])
  
  return (
        <div>
            <h1>Speed Typing Test</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={startGame}> Start </button>
            <h4>Word count: {wordCount}</h4>
        </div>
  )
}

export default App
