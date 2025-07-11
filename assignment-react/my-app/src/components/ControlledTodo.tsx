"use client";

import { useState } from "react";

const ControlledTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = () => {
    setTodoList((prev) => [...prev, todo]);
  };
  return (
    <>
      <p>add items</p>
      <input
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>add</button>

      {todoList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
};
export default ControlledTodo;
