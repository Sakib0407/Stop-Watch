import React, {useState, useRef} from 'react';
import './App.css';

export default function App() {
  const padTime = time => {
    return time.toString().padStart(2, '0')
  }
  
  const [timeleft , setTimeleft] = useState(25 * 60)
  const [header, setHeader] = useState('Stop Watch')
  const minute = padTime(Math.floor((timeleft / 60)))
  const seconds = padTime(timeleft -( minute * 60))
  const intervalRef = useRef(null)
   
   const  startTime = () => {
     intervalRef.current =  setInterval(() => {
       setHeader(' Let the count down begin !!!')
  
     setTimeleft( time => {
       if(time > 0) return  time -1
       return 0;
     }
      
      )}, 1000)
  }
  const endTimer = () =>{
    clearInterval(intervalRef.current)
  }
  const resetTimer = () =>{
    setTimeleft(25 * 60)
  }
  return (
    <div className="app">
      <h2>Pomodoro!</h2>

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
