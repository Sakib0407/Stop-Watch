import React, {useState, useRef} from 'react';
import './App.css';

export default function App() {
  const padTime = time => {
    return time.toString().padStart(2, '0')
  }
  
  const [timeleft , setTimeleft] = useState(0)
  const [header, setHeader] = useState(' Let the count down begin !!!')
  const minute = padTime(Math.floor((timeleft / 60)))
  const seconds = padTime(timeleft -( minute * 60))
  const intervalRef = useRef(null)
   
   const  startTime = () => {
     intervalRef.current =  setInterval(() => {
       setHeader('Counting !!!')
  
     setTimeleft( time => time + 1
      )}, 1000)
  }
  const endTimer = () =>{
    clearInterval(intervalRef.current)
    setHeader('Paused :(')
  }
  const resetTimer = () =>{
    setTimeleft(0)
    setHeader('Start Again!')
  }
  return (
    <div className="app">
      <h2>{header}</h2>

      <div className="timer">
        <span>{minute}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTime}>Start</button>
        <button onClick={endTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
