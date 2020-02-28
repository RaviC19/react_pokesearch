import React, { useState, useEffect } from "react";
export default AutoComplete;

function AutoComplete({ searchPoke, handleSelect }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pokemon?name=${searchPoke}`)
      .then(res => res.json())
      .then(data => {
        setOptions(data);
      });
  }, [searchPoke]);

  return (
    <ul>
      {options.map(item => {
        return (
          <li key={item.name} onClick={() => handleSelect(item.name)}>
            {item.name} <img src={item.img_url} alt={item.name} />
          </li>
        );
      })}
    </ul>
  );
}
