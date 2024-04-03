import React, { useState, useRef } from "react";
import TimerCard from "./TimerCard";

const TimerHeader = () => {
  const [name, setName] = useState("Ganesh");
  const playerName = useRef();

  function handleNameSubmit() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <>
      <h5>Welcome {name}</h5>
      <div>
        <input type="text" ref={playerName} />
        <button onClick={handleNameSubmit}>Set Name</button>
      </div>
      <TimerCard mode="Easy" timeInSeconds={1}></TimerCard>
      <TimerCard mode="Medium" timeInSeconds={3}></TimerCard>
      <TimerCard mode="Hard" timeInSeconds={5}></TimerCard>
      <TimerCard mode="DieHard" timeInSeconds={10}></TimerCard>
    </>
  );
};

export default TimerHeader;
