"use client";
import { useState } from "react";

const RandomNumberGenerator = () => {
  const generateRandom = ():number => {
    let result = Math.floor(Math.random() * 100 + 1);
    return result;
  };
  const [number, setNumber] = useState<number>(0);
  const setRandom = () => {
    setNumber(generateRandom());
  };

  return (
    <>
      <p>number is :{number}</p>
      <button onClick={setRandom}>randomize</button>
    </>
  );
};
export default RandomNumberGenerator;
