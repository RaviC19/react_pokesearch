import React, { useState, useEffect } from "react";
export default AutoComplete;

function AutoComplete({ searchPoke, handleSelect }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.0.75:5000/pokemon?search=${searchPoke}`)
      .then(res => res.json())
      .then(({ payload }) => {
        setOptions(payload);
      });
  }, [searchPoke]);

  return (
    <ul>
      {options.map(item => {
        return (
          <li key={item.name} onClick={() => handleSelect(item.name)}>
            {item.name} <img src={item.img_url} />
          </li>
        );
      })}
    </ul>
  );
}
