import React, { useState } from "react";
import { Typography } from "@mui/material";

const NotesTextArea = ({ classes, onTextAreaHandler }) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputLength, setInputLength] = useState(0);
  const saveTextAreaHandler = () => {
    onTextAreaHandler(textAreaValue);
    setTextAreaValue("");
    setInputLength(0);
  };
  function inputChangeHandler(e) {
    setTextAreaValue(e.target.value);
    setInputLength(e.target.value.length);
  }
  return (
    <div>
      <div>
        <textarea
          name=""
          id=""
          maxLength="50"
          onChange={inputChangeHandler}
          value={textAreaValue}
          style={{ width: "300px", height: "100px" }}
        ></textarea>
      </div>
      <div>
        <Typography>{50 - inputLength} Char Remaining</Typography>
        <button onClick={saveTextAreaHandler}>Save</button>
      </div>
    </div>
  );
};

export default NotesTextArea;
