'use client';

import { useState, useEffect } from 'react';

export default function UseTimer(initialSeconds:number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    

    if (isRunning && seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

       return () => clearInterval(timerId); // cleanup interval on unmount or state change
    }

    if (seconds === 0) {
      setIsRunning(false);
    }

   
  }, [isRunning, seconds]);

  const start = () => {
    if (!isRunning && seconds > 0) setIsRunning(true);
  };

  const pause = () => setIsRunning(false);

  const reset = () => {
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  return { seconds, isRunning, start, pause, reset };
}