import {useState, useRef, useEffect} from "react"


const useCustomHooks = (startingTime) => {

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRuning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const boxRef = useRef(null)
  
    
    function startGame() {
      setIsTimeRuning(true)
      setTimeRemaining(startingTime)
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

  return {text, startGame, endGame, timeRemaining, isTimeRunning, boxRef, wordCount, handleChange}
}

export default useCustomHooks