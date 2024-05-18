import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";

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
  const [players, setPlayers] = useState({
    'X': 'Player1',
    'O': 'Player2'
  })
  const activePlayer = derivedActivePlayer(gameTurn);

  let winner;

  //this is important to make gameBoard immutable as when we do rematch if we directly refer this initial array, the initial array will not be reset and game will not restart
  const gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurn) {
    const { box, player } = turn;
    const { row, col } = box;
    gameBoard[row][col] = player;
  }

  for (const combinations of WINNING_COMBINATIONS) {
    const firstBox = gameBoard[combinations[0].row][combinations[0].column];
    const secondBox = gameBoard[combinations[1].row][combinations[1].column];
    const thirdBox = gameBoard[combinations[2].row][combinations[2].column];

    if (firstBox && firstBox === secondBox && firstBox === thirdBox) {
      winner = players[firstBox];
    }
  }

  const hasDraw = gameTurn.length === 9 && !winner;

  function handleRematch() {
    setGameTurn([]);
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

  function handlePlayerNameChange (symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="Player 1" symbol="X" isActive={activePlayer === "X"} onNameChange={handlePlayerNameChange} />
          <Players name="Player 2" symbol="O" isActive={activePlayer === "O"} onNameChange={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematch={handleRematch} />
        )}
        <GameBoard onSelectSquare={clickSquare} boards={gameBoard} />
      </div>
      <Log turns={gameTurn}></Log>
    </main>
  );
}

export default App;
