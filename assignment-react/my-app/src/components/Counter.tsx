"use client";

import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => setCount(count - 1);

  return(
    <div>
        <p>count:{count}</p>
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
    </div>
  )

};

export default Count;
