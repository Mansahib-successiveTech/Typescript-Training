"use client"

import { ChangeEvent, MouseEventHandler } from "react";

interface Props{
    backGroundStyle:string;
    text:string; 
    onClickhandler:MouseEventHandler<HTMLButtonElement>


}

const ReusableButton=(props:Props)=>{
    const {onClickhandler,backGroundStyle,text}=props;

return (
    <>
    <button onClick={onClickhandler} style={{background:backGroundStyle}}>
        {text}
    </button>
    </>
)
}
export default ReusableButton