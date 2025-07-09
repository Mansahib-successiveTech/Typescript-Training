"use client";

interface themes{
  theme:string;
  setTheme: Dispatch<SetStateAction<string>>;
  Toggler: () => void;

}

import { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
const Mycontext = createContext<themes | undefined>(undefined);

export const ThemeContext = ({ children }:{children:ReactNode}) => {
  const [theme, setTheme] = useState("light");

  const Toggler=()=>{
    setTheme((prev)=>prev==="light"?"dark":"light")
  }

  return(
    <>
    <Mycontext.Provider value={{theme,setTheme,Toggler}}>
        {children}
    </Mycontext.Provider>
    </>
  )
};

export const useTheme=():themes=>{

 const context= useContext(Mycontext);
 if(!context){
  throw new Error("error");
 }
 else
 return context;
}

