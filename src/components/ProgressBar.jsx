import React, { useEffect, useState } from "react";

function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;
