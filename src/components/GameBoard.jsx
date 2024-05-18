import { useState } from "react";



export default function GameBoard({ onSelectSquare, boards }) {
 

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
      {boards.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null ? true : false}
                >
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
