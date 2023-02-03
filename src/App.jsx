import React, {useState, useEffect, useRef} from 'react'
import useCustomHooks from './hooks/useCustomHooks'
import './App.css'


function App() {

  const {
    text,
    startGame,
    handleChange,
    timeRemaining,
    isTimeRunning,
    boxRef,
    wordCount
} = useCustomHooks(15)  
  
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
