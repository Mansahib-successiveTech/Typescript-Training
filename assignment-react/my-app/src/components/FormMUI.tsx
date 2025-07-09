"use client";
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
 const FormMui = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handelForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myFormData = [
      {
        name: name,
        password: password,
        age: age,
      },
    ];
    console.log(myFormData);
  };
  return (
    <>
      <p>user form</p>
      <Box component="form" onSubmit={handelForm}>
        <TextField
          label="name"
          required
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <TextField
          error={password.length < 8 && password !== ""}
          required
          label="password"
          variant="outlined"
          helperText={
            password.length < 8 && password != ""
              ? "must be 8 characters"
              : password === ""
              ? "enter password"
              : ""
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <TextField
          label="age"
          required
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        />
        <br></br>
        <Button disabled={  password.length < 8 || password === ""}
         type="submit">submit</Button>
      </Box>
    </>
  );
};

export default FormMui