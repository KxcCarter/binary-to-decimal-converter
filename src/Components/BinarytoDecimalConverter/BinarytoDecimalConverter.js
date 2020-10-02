import React, { useState } from 'react';
import styles from '../BinarytoDecimalConverter/binToDec.module.css';

function BinaryToDecimalConverter() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    binaryConverter(number);
    setNumber('');
  };

  return (
    <div className="widget">
      <div className={styles.widgetBody}>
        <h1>Binary digit to Decimal converter</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputField" className={styles.label}>
            Type binary digits here:{' '}
          </label>
          <input
            id="inputField"
            type="number"
            value={number}
            name="binary_input"
            pattern="[0-1]"
            title="Binary digits only (1 or 0)."
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit">convert</button>
        </form>
        <h2>Result: {binary}</h2>
      </div>
    </div>
  );
}

export default BinaryToDecimalConverter;
