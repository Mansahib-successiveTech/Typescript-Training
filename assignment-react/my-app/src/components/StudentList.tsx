"use client";

import { useMemo, useState } from "react";
const StudentList = () => {
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const showStudentList = useMemo(() => {
    console.log("list diplay");
    if (studentList) {
      return studentList.map((items, id) => <p key={id}>{items}</p>);
    }

   
  },[studentList])

  const addStudent = () => {
    console.log("added");
    setStudentList((items) => [...items, student]);
    setStudent("");
    
  };
  return (
    <>
      <p>student list</p>
      <br></br>
      <label>enter student name</label>
      <input value={student} onChange={(e) => setStudent(e.target.value)} />
      <button onClick={addStudent}>add</button>
      <div>{showStudentList}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <p>count:{count}</p>
    </>
  );
};
export default StudentList;
