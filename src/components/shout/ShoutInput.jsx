import React, { useEffect, useState } from "react";
import classes from "./ShoutInput.module.css";
import CommonInput from "../common/CommonInput";
import Box from "@mui/material/Box";

let getShoutValue = localStorage.getItem("shoutValue") || "Shout Me";

const ShoutInput = () => {
  const [value, setValue] = useState(getShoutValue);

  useEffect(() => {
    localStorage.setItem("shoutValue", value);
  }, [value]);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, maxWidth: 500 },
        }}
        noValidate
        autoComplete="off"
      >
        <CommonInput
          onChangeHandler={changeHandler}
          value={value}
          label="Shout Me"
        ></CommonInput>
      </Box>
      <p className={classes.inputAnswer}>{value}</p>
    </>
  );
};

export default ShoutInput;
