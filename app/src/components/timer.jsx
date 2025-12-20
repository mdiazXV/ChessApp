import { useState, useEffect } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) return;

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

  return (
    <div>
      <p>
        Timer: {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

export default Timer;