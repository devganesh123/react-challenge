import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import classes from "./QuizAnswer.module.css";

const QuizAnswer = ({
  list,
  onShowCorrectAnswerDetails,
  answer,
  reset,
  onShowNextBtn,
}) => {
  const [correctBg, setCorrectBg] = useState("transparent");
  const [isDisable, setIsDisable] = useState(false);

  const showAnswer = (event) => {
    if (event.target.textContent == answer) {
      setCorrectBg("green");
      onShowCorrectAnswerDetails();
    } else {
      console.log("incorrect");
      setCorrectBg("red");
    }
    onShowNextBtn();
  };

  useEffect(() => {
    setCorrectBg("transparent");
  }, [reset]);

  return (
    <li
      className={classes.listItem}
      style={{
        backgroundColor: correctBg,
        listStyleType: "none",
        disable: true,
      }}
    >
      <Typography sx={{ mb: 1.5 }} color="text.secondary" onClick={showAnswer}>
        {list}
      </Typography>
    </li>
  );
};

export default QuizAnswer;
