import Players from "./components/Players"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players name="Jai" symbol="X"/>
          <Players name="John" symbol="O"/>
        </ol>
        GAME
      </div>
      Player move
    </main>
  )
}

export default App
