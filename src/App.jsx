import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function clickSquare() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="Jai" symbol="X" isActive={activePlayer==='X'} />
          <Players name="John" symbol="O" isActive={activePlayer==='O'} />
        </ol>
        <GameBoard onSelectSquare={clickSquare} activePlayerSymbol={activePlayer}/>
      </div>
      Player move
    </main>
  );
}

export default App;
