import { useState } from "react";

export default function Players({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    function handleClick () {
        setIsEditing((editing) => !editing);
    }

    function handleNameChange (event) {
        setPlayerName(event.target.value)
    }

    let editablePlayer = <span className="player-name">{playerName}</span>

    if(isEditing) {
        editablePlayer = <input type="text" value={playerName} onChange={handleNameChange}></input>
    }

  return (
    <li>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{ isEditing ? 'Save' : 'Edit' }</button>
    </li>
  );
}
