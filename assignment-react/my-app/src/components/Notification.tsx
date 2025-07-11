"use client";

import { useEffect, useState } from "react";


const Notification = () => {
  const [message, setMessage] = useState<string>("");

  const showMessage = () => {
    setMessage("this is message for 5sec");
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  return (
    <>
      <button onClick={showMessage}>show notifications</button>
      <p>{message}</p>
    </>
  );
};
export default Notification;
