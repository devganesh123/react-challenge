import React from "react";
import CommonTitle from "../../components/common/CommonTitle";
import QuizBundle from "../../components/quiz/QuizBundle";

import Practice from "../../components/practice/Practice";

const Quiz = () => {
  return (
    <>
      <CommonTitle day="Eleven" title="Quiz Game"></CommonTitle>
      <QuizBundle></QuizBundle>
    </>
  );
};

export default Quiz;
