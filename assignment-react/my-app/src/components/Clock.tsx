"use client";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>clock</p>
      <p>{time}</p>
    </>
  );
};
export default Clock;
