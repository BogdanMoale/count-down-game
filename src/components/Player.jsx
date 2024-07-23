import { useState, useRef } from "react";

export default function Player() {
  //Connecting & Accessing HTML Elements via Refs
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();

  function handleClick() {
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
