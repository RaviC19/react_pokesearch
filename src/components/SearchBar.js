import React, { useState } from "react";
export default SearchBar;

function SearchBar({ addToPoke }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function resetInput() {
    setInput("");
  }

  return (
    <div className="input">
      <form
        onSubmit={event => {
          event.preventDefault();
          resetInput();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search for Pokemon"
        />
      </form>
    </div>
  );
}
