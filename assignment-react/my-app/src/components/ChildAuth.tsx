"use client";

import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const ChildAuth =(() => {
  const { loggedIn, login } = useAuth();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onClickHandler=()=>{
    login(name, password)

    setPassword("");
  }
  return (
    <>
     <p>{loggedIn ? ` user loged in ${name}` : "please login"}</p>
      {
      loggedIn?"welcome":<> <label>username</label>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label>password</label>
      <input
        value={password}
        type="number"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <button onClick={onClickHandler}>login</button>
      </div>
      </>
      }

     
     
    </>
  );
});
export default ChildAuth;
