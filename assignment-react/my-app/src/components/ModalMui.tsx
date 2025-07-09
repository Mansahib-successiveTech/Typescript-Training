"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalMui = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const handelForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = {
      name,
      password,
      age,
    };

    console.log(result);
    setShow(true);
    handleClose();
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            hi user
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
              <Button
                type="submit"
                disabled={password.length < 8 || password === ""}
              >
                submit
              </Button>
            </Box>
          </Typography>
        </Box>
      </Modal>

      {show ? (
        <>
          <div>
            hi {name} you are {age} years old
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ModalMui;
