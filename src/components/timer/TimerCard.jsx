import React, { useState, useRef } from "react";
import TimerModal from "./TimerModal";

const TimerCard = ({ mode, timeInSeconds }) => {
  const [timerRemaining, setTimerRemaining] = useState(timeInSeconds * 1000);

  let timeout = useRef();
  const dialog = useRef();

  let timerIsActive =
    timerRemaining > 0 && timerRemaining < timeInSeconds * 1000;

  if (timerRemaining < 1) {
    // stop timer automatically
    clearInterval(timeout.current);
    // show the modal result
    showDialog();
  }

  function startTimer() {
    timeout.current = setInterval(() => {
      console.log(timerRemaining);
      setTimerRemaining((prevTime) => prevTime - 100);
    }, 100);
  }

  function stopTimer() {
    clearInterval(timeout.current);
    showDialog();
    console.log(timerRemaining);
  }

  function showDialog() {
    dialog.current.open();
  }

  function resetTimer() {
    // Resetting the timer again to its original state
    clearInterval(timeout.current);
    setTimerRemaining(timeInSeconds * 1000);
    timerIsActive = false;
  }

  return (
    <>
      <TimerModal
        ref={dialog}
        time={timeInSeconds}
        remaining={timerRemaining}
        onResetTimer={resetTimer}
      ></TimerModal>
      <div>
        <h3>{mode}</h3>
        <p>{timeInSeconds} Seconds</p>
        <button onClick={!timerIsActive ? startTimer : stopTimer}>
          {!timerIsActive ? "Start" : "Stop"} Challenge
        </button>
      </div>
    </>
  );
};

export default TimerCard;
