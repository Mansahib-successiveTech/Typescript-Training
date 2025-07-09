"use client";

import { useState,useCallback } from "react";
import { Child } from "./Child";
const Parent = () => {
  const [count, setCount] = useState<number>(0);

  const Increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  
  return (
    <>
      <p>parent</p>
      <p>count :{count}</p>
      <button onClick={Increment}>increase</button>
      <Child Increment={Increment}  count={count} setCount={setCount}/>
    </>
  );
};
export default Parent