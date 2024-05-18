import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { box, player } = turn;
    const { row, col } = box;
    gameBoard[row][col] = player;
  }

  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function clickHandler(rowIndex, colIndex) {
  //     {
  //       !gameBoard[rowIndex][colIndex] &&
  //         setGameBoard((prevStateBoard) => {
  //           const updatedStateBoard = [
  //             ...prevStateBoard.map((innerArray) => [...innerArray]),
  //           ];
  //           updatedStateBoard[rowIndex][colIndex] = activePlayerSymbol

  //           return updatedStateBoard;
  //         });

  //       onSelectSquare();
  //     }
  //     {
  //         gameBoard[rowIndex][colIndex] && window.alert("Choose a different box")
  //     }
  //   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
