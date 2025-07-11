"use client"
import { useState } from "react";
import Clock from "./Clock";

const ControlledUnhide = () => {
  const [password, setPassword] = useState<string>("");
  const [hide, setHide] = useState<boolean>(false);

  const display = () => {
    if (password === "show please") 
     setHide((prev)=>prev=!prev)   
  };

  return (
    <>
      <p>this is visible all the time</p>
      <label>enter the text to render component</label>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={display}>{hide?"hide":"show"}</button>
      {hide?<Clock />:""}
    </>
  );
};
export default ControlledUnhide;
