import { useState, useEffect } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(59);
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

     if(gameOver == true){
       return (
        <div>
       <h2>Game Over</h2>
        <button onClick={handleClick}>Reset</button></div>
    );
       
     }

     function handleClick () {
        setGameOver(false);
        setMinutes(20);
        setSeconds(59);
     }

  return (
    <div>
      <p>
        Timer: {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

export default Timer;