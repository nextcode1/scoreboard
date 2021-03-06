import { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addPlayer(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}
