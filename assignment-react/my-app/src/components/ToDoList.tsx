"use client";

import { useState } from "react";
interface taskObj{
  id:number;
  name:string;
  completed:boolean;
}

 const ToDoList = () => {
  const [list, setList] = useState<taskObj[]>([]);
  const [task, setTask] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const addTask = () => {
    console.log("rendered");
    if (task) {
      const newTask = {
        id: Math.floor(Math.random() * 100 + 1),
        name: task,
        completed: false,
      };

      setList((prev) => [...prev, newTask]);
      setTask("");
    }
  };

  const remove = (id:number) => {
    console.log("removed");
    setList((prev) => prev.filter((items) => items.id !== id));
  };

  const checkBoxToggler = (id:number) => {
    console.log("checkbox");
    setList((prev) =>
      prev.map((items) =>
        items.id === id ? { ...items, completed: !items.completed } : items
      )
    );
  };
  return (
    <>
      <h2>ToDo List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item) => (
          <p key={item.id} style={{ marginTop: "10px" }}>
            <input type="checkbox" onChange={() => checkBoxToggler(item.id)} />
            <>{item.name}</>
            <button
              onClick={() => remove(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </p>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <p>{count}</p>
    </>
  );
};
export default ToDoList
