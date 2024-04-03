import React, { useState } from "react";
import TikTakPlayer from "./TikTakPlayer";
import GameBoard from "./GameBoard";

let listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "5em",
};

const TikTak = () => {
  const [userSymbol, setUserSymbol] = useState("X");

  const userSelectHandler = () => {
    setUserSymbol((prev) => {
      return prev == "X" ? "O" : "X";
    });
  };

  return (
    <>
      <ul style={listStyle}>
        <TikTakPlayer
          playerName="player1"
          playerSymbol="X"
          setClassName={userSymbol == "X" ? "active" : ""}
        ></TikTakPlayer>
        <TikTakPlayer
          playerName="player2"
          playerSymbol="O"
          setClassName={userSymbol == "O" ? "active" : ""}
        ></TikTakPlayer>
      </ul>
      <GameBoard
        onUserSymbol={userSymbol}
        onUserSelect={userSelectHandler}
      ></GameBoard>
    </>
  );
};

export default TikTak;
