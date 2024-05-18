import { useState } from "react";

const initialGameBoard = [
  [null, "X", "O"],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard( { onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function clickHandler(rowIndex, colIndex, event) {
       
        setGameBoard((prevStateBoard) => {
            const updatedStateBoard = [...prevStateBoard.map(innerArray => [...innerArray])];
            updatedStateBoard[rowIndex][colIndex] = activePlayerSymbol

            return updatedStateBoard;
        })

        onSelectSquare();
    }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => clickHandler(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
