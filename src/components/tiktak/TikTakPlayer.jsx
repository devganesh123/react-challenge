import React, { useState } from "react";
import "./tiktak.css";

let listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
};

const TikTakPlayer = ({ playerName, playerSymbol, setClassName }) => {
  const [userName, setUserName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  const changePlayerNameHandler = () => {
    setIsEditing((editing) => {
      return !editing;
    });
  };

  let name = <span>{userName}</span>;

  const setNameHandler = (event) => {
    let newName = event.target.value;
    setUserName(newName);
  };

  if (isEditing) {
    name = (
      <input type="text" value={userName} onChange={setNameHandler}></input>
    );
  }

  return (
    <li style={listStyle} className={setClassName}>
      <span style={listStyle} className="player">
        {name}
        <span>{playerSymbol}</span>
      </span>
      <button onClick={changePlayerNameHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default TikTakPlayer;
