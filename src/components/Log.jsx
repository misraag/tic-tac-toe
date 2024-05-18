export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.box.row},${turn.box.col}`}>
          {`Player ${turn.player} moved ${turn.box.row}, ${turn.box.col}`}
        </li>
      ))}
    </ol>
  );
}
