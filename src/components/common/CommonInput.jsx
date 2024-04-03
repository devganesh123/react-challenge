import React from "react";

import TextField from "@mui/material/TextField";

const CommonInput = ({ onChangeHandler, value, label }) => {
  return (
    <>
      <TextField
        id="fullWidth"
        fullWidth
        label={label}
        value={value}
        onChange={onChangeHandler}
      />
    </>
  );
};

export default CommonInput;
