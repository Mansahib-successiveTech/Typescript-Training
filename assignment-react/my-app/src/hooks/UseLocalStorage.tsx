"use client";

const UseLocalStorage = (key:string, value:string) => {
  const getValue = () => {
    if (typeof window === "undefined") { //for error remove
      return value;
    }
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : value;
  };
  const setValue = (newValue:string) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return { getValue, setValue, remove };
};

export default UseLocalStorage;