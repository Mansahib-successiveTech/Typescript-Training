"use client";

import { ChangeEvent, useMemo, useState } from "react";

const EmployeeSalary = () => {
  
  const [employeeList, setEmployeeList] = useState([]);
  const [employee, setEmployee] = useState<string>("");
  const [salary, setSalary] = useState<number>(0);

  const ShowAverage = useMemo(() => {

    if (!employeeList) {
      return 0;
    }
    const result = employeeList.reduce((acc, element) => acc + element.salary, 0);
    return result / employeeList.length;
  }, [employeeList]);

  const addEmployee = () => {
    if (employee && salary) {
      setEmployeeList((prev) => [
        ...prev,
        {
          name: employee,
          salary: Number((salary)), // make sure it's a number
        },
      ]);
      setEmployee(""); 
      setSalary(0);
    }
  };

  return (
    <>
      <p>employees list</p>

      {employeeList.map((items, index) => (
        <p key={index}>
          {items.name} -- {items.salary}
        </p>
      ))}
      <p>add employee</p>
      <input value={employee} onChange={(e) => setEmployee(e.target.value)} />
      <p>salary</p>
      <input
        type="number"
        value={salary}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSalary(Number(e.target.value))}
      />
      <br></br>
      <button onClick={addEmployee}>add reocrd</button>
      <p>new salary avg:{ShowAverage?Math.floor(ShowAverage):0}</p>
      
    </>
  );
};
export default EmployeeSalary;
