"use client"
import { FormEvent, useState } from "react"

const ControlledPassword=()=>{
const [password,setPassword]=useState<string>("");
const [rePassword,setRePassword]=useState<string>("")

const formhandler=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(password,rePassword);

}
    return(<>
    <form onSubmit={formhandler}>
    <p>enter your password</p>
    <label>Password</label>
    <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
    <label>Re password</label>
    <input type="password" required value={rePassword} onChange={(e)=>setRePassword(e.target.value)}/>

    {password===rePassword && password!=="" && rePassword!==""?"password matched":"password not matched"}
    <button type="submit" disabled={password!=rePassword}>submit</button>
    </form>

      </>)
}
export default ControlledPassword