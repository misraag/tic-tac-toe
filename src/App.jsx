import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import Log from "./components/Log";

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
        <GameBoard onSelectSquare={clickSquare} turns={gameTurn} />
      </div>
      <Log turns={gameTurn}></Log>
    </main>
  );
}

export default App;
