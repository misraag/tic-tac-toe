export default function GameOver ({ winner, onRematch }) {
    return <div id="game-over"> 
        <h2>Gamer Over!</h2>
        {winner && <p>{`You Won ${winner}`}</p>}
        {!winner && <p>It's a draw</p>}
        <p><button onClick={onRematch}>Rematch!</button></p>
    </div>
}