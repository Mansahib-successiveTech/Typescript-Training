"use client";
import { ChangeEvent, useState } from "react";

const CounterWithStep = () => {
  const [step, setStep] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const increaseCounterWithStep = () => setCount(count + Number(step));

  const decreaseCounterWithStep = () => setCount(count - step);
  return (
    <>
      <p>enter value of step</p>
      <input
        type="number"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setStep(Number(e.target.value))
        }
      />

      <p>count:{count}</p>
      <button onClick={increaseCounterWithStep}>Increment with {step}</button>
      <button onClick={decreaseCounterWithStep}>decrement with {step}</button>
    </>
  );
};

export default CounterWithStep;
