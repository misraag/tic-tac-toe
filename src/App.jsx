import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurn) {
  let player = "X";

  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    player = "O";
  }
  return player;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurn);
  let winner;

  const gameBoard = initialGameBoard;

  for (const turn of gameTurn) {
    const { box, player } = turn;
    const { row, col } = box;
    gameBoard[row][col] = player;
  }


  for(const combinations of WINNING_COMBINATIONS) {
    const firstBox = gameBoard[combinations[0].row][combinations[0].column]
    const secondBox = gameBoard[combinations[1].row][combinations[1].column]
    const thirdBox = gameBoard[combinations[2].row][combinations[2].column]

    if(firstBox && firstBox===secondBox && firstBox===thirdBox) {
      winner = firstBox;
    }
  }

  function clickSquare(rowIndex, colIndex) {
    // setActivePlayer((currActivePlayer) =>
    //   currActivePlayer === "X" ? "O" : "X"
    // );

    setGameTurn((prevGameTurn) => {
      let currentPlayer = derivedActivePlayer(prevGameTurn);

      const updatedGameTurn = [
        { box: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurn,
      ];

      return updatedGameTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="Jai" symbol="X" isActive={activePlayer === "X"} />
          <Players name="John" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {winner && `You Won ${winner}!`}
        <GameBoard onSelectSquare={clickSquare} boards={gameBoard} />
      </div>
      <Log turns={gameTurn}></Log>
    </main>
  );
}

export default App;
