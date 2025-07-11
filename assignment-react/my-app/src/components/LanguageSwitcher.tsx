"use client"
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher=()=>{
const {Toggler,language} =useLanguage();


    
    return(
        <>
        <p>
         {language==="eng"?"hi everyone how are you":"Hola a todos como estan"}
         </p>
         <button onClick={Toggler}
         >
         {language}
         </button>
        </>
    )
} 
export default LanguageSwitcher