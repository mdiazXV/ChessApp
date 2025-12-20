import { useState, useEffect } from "react";
import '../styles/timer.css';

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (minutes === 0 && seconds === 0){
      setGameOver(true);
      return;
    }

    const interval = setInterval(() => {
      if (seconds === 0) {
        setMinutes(prev => prev - 1);
        setSeconds(59);
      } else {
        setSeconds(prev => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  function handleClick () {
    setGameOver(false);
    setMinutes(20);
    setSeconds(59);
  }

  if(gameOver){
    return (
      <div className="gameOverContainer">
        <h2>Game Over</h2>
        <button className="resetButton" onClick={handleClick}>Reset</button>
      </div>
    ); 
  }

  return (
    <div>
      <p className="time">
        Timer: {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

export default Timer;