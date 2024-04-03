import React, { useState, useRef } from "react";
import classes from "./PasswordGen.module.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()[]{}<>?,./-=";

let allChars = upperCase + lowerCase + numbers + symbols;

const PasswordGen = () => {
  const [passCode, setPassCode] = useState("");
  const [open, setOpen] = React.useState(false);

  let copyPassword = useRef();

  const randomPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    setPassCode(password);
  };

  const copyTextHandler = (copiedPassword) => {
    //select the text
    let selectedText = copiedPassword.current.innerText;
    navigator.clipboard.writeText(selectedText);
    // console.log(selectedText);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      ></IconButton>
    </React.Fragment>
  );

  return (
    <>
      <div>
        <h2>Generate a Random Password</h2>
        <div className={classes.randomInput}>
          <div className={classes.container}>
            <div className={classes.passwordBox} ref={copyPassword}>
              {passCode}
            </div>
            <span
              onClick={() => {
                copyTextHandler(copyPassword);
              }}
            >
              <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message="Copied"
                action={action}
              />
              <ContentCopyIcon></ContentCopyIcon>
            </span>
          </div>
        </div>

        <button onClick={randomPassword}>Generate Password</button>
      </div>
    </>
  );
};

export default PasswordGen;
