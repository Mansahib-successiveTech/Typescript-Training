"use client"

import { Dispatch, SetStateAction } from "react";

interface Props{
    Increment:()=>void;
    count:number;
    setCount: Dispatch<SetStateAction<number>>
}

export const Child=(props:Props)=>{
    const {Increment,count,setCount}=props
    const reset = () => {
        setCount(0);
      };
    
    return(
        <>
        <p>child:{count}</p>
        <button onClick={Increment}>increase</button>
        <button onClick={reset}>reset</button>
        </>
    )

}

Child.prototype