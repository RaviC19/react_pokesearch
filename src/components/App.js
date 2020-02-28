import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

const data = [
  { id: 1, name: "Bulbasaur", description: "Green mofo" },
  { id: 2, name: "Charizard", description: "Red mofo" },
  { id: 3, name: "Squirtle", description: "Blue mofo" }
];

function App() {
  const [searchPoke, setSearchPoke] = useState("");

  function handleChange(event) {
    searchPoke(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="h1">PokeSearch</h1>
      <SearchBar addToPoke={addToPoke} />
    </div>
  );
}

export default App;
