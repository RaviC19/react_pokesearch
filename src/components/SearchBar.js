import React from "react";
export default SearchBar;

function SearchBar({ searchPoke, handleChange }) {
  return (
    <div className="input">
      <input
        type="text"
        value={searchPoke}
        onChange={handleChange}
        placeholder="Search for Pokemon"
      />
    </div>
  );
}
