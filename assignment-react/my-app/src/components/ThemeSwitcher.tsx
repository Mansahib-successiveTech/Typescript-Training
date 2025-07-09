"use client";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
const ThemeSwitcher = () => {
  const { theme, Toggler } = useTheme();
  useEffect(()=>{
    document.body.className = theme;
  },[theme])
 
  return (
    <>
      <div>
        <header>
          <button onClick={Toggler}>{theme}</button>
          <p></p>
        </header>
      </div>
    </>
  );
};
export default ThemeSwitcher;
