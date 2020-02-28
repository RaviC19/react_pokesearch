import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import AutoComplete from "./AutoComplete";

function App() {
  const [searchPoke, setSearchPoke] = useState("");
  //const [result, setResult] = useState({name: null});

  function handleChange(event) {
    setSearchPoke(event.target.value);
  }

  function handleSelect(item) {
    setSearchPoke(item);
  }

  return (
    <div className="App">
      <h1 className="h1">PokeSearch</h1>
      <SearchBar searchPoke={searchPoke} handleChange={handleChange} />
      <AutoComplete searchPoke={searchPoke} handleSelect={handleSelect} />
    </div>
  );
}

export default App;
