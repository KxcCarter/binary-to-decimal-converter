import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState();
  const [binary, setBinary] = useState();

  const binaryConverter = (num) => {
    const binNum = num.toString();
    let position = null;
    let result = null;
    let digit = null;

    for (let i in binNum) {
      position = binNum.length - 1 - i;
      digit = parseInt(num[i]);
      if (digit === 0 || digit === 1) {
        result += digit * 2 ** position;
      } else {
        throw alert('That is not a binary number.');
      }
    }

    setBinary(result);
    return result;
  };

  const handleClick = (event) => {
    event.preventDefault();
    binaryConverter(number);
    setNumber();
    console.log(number);
  };

  return (
    <div className="App">
      <h1>Binary digit to Decimal converter</h1>
      <form onSubmit={handleClick}>
        <label htmlFor="inputField">Type binary digits here: </label>
        <input
          id="inputField"
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <button type="submit">convert</button>
      </form>
      <h3>Result: {binary}</h3>
    </div>
  );
}

export default App;
