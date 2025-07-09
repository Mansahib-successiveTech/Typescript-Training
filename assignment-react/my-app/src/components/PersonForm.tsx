"use client";
import { ChangeEvent, useState } from "react";

export default function PersonForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  return (
    <>
      <div>
        <p>user form</p>
        <label>firstname</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
        />
        <br></br>
        <label>lastname</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />
        <br></br>
        <label>age</label>
        <input
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAge(Number(e.target.value))
          }
        />
        <br></br>
        <div>
          <p> {firstName}</p>

          <p>{lastName}</p>

          <p>{age}</p>
        </div>
      </div>
    </>
  );
}
