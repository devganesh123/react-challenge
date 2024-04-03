import React, { useState } from "react";

import CommonTitle from "../../components/common/CommonTitle";
import Question from "../../components/QuestionAnswer/Question";

const QuestionAnswer = () => {
  return (
    <>
      <CommonTitle day={"One"} title={"Question & Answer"}></CommonTitle>
      <Question></Question>
    </>
  );
};

export default QuestionAnswer;
