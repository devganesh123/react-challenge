import React, { useState } from "react";

const orderedList = {
  display: "flex",
  gap: "2em",
  justifyContent: "center",
  marginTop: "2rem",
  listStyleType: "none",
};

const orderListItem = {
  background: "grey",
  borderRadius: "1px",
  padding: "10px",
  width: "50px",
  height: "50px",
};

const initialArray = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onUserSymbol, onUserSelect }) => {
  const [gameSymbol, setGameSymbol] = useState(initialArray);

  const listHandler = (row, col) => {
    setGameSymbol((prev) => {
      let newArray = [...prev.map((innerArray) => [...innerArray])];
      newArray[row][col] = onUserSymbol;

      return newArray;
    });

    onUserSelect();
  };

  return (
    <ol style={{ listStyleType: "none" }}>
      {gameSymbol.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol style={orderedList}>
            {row.map((col, colIndex) => (
              <li
                key={colIndex}
                style={orderListItem}
                onClick={() => {
                  listHandler(rowIndex, colIndex);
                }}
              >
                {col}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
