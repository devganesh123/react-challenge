import React from "react";
import TimerHeader from "../../components/timer/TimerHeader";
import CommonTitle from "../../components/common/CommonTitle";
const TimerFind = () => {
  return (
    <>
      <CommonTitle day={13} title="Countdown"></CommonTitle>
      <p>Stop the timer once you estimate that time is almost up</p>
      <TimerHeader></TimerHeader>
    </>
  );
};

export default TimerFind;
