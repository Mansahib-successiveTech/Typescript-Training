"use client"

interface authInterface{
   loggedIn:boolean;
   login: (name: string, pass: string) => void
}

import { createContext, ReactNode, useContext, useState } from "react";
const MyAuthContext=createContext<authInterface| undefined>(undefined);

export const AuthContextProvider=({children}:{children:ReactNode})=>{
const username="mansahib";
const password=123;
const [loggedIn,setLoggedin]=useState(false);
const login=((name:string,pass:string)=>{
    if(name=== username && parseInt(pass)===password){
        setLoggedin(true);
    }

})
return(
    <MyAuthContext.Provider value={{loggedIn,login}} >
        {children}
    </MyAuthContext.Provider>
    
)

}

export const useAuth=():authInterface=>
    {
        const context=useContext(MyAuthContext);
        if(!context){
            throw new Error("error")
        }    
        else
        return context
    }

