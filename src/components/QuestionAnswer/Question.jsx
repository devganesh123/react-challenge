import React, { useState } from "react";
import { Button } from "@mui/material";
import classes from "./Question.module.css";

const Question = () => {
  const [visible, setVisible] = useState(false);

  const showAnswerHandler = () => {
    setVisible(!visible);
  };

  return (
    <div className={classes.questionSection}>
      <h1 className="question">Who Won the 2023 World Cup?</h1>
      {visible && <p className="answer">Australia</p>}
      <Button variant="contained" onClick={showAnswerHandler}>
        {visible ? "Hide Answer" : "Show Answer"}
      </Button>
    </div>
  );
};

export default Question;
