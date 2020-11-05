import React, { useState, useEffect } from 'react';
import styles from '../Calculator/calculator.module.css';

function Calculator() {
  const [display, setDisplay] = useState([]);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operand, setOperand] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(true);

  const updateDisplay = (input) => {
    if (!operand) {
      setDisplay(num1);
    } else {
      setDisplay(num2);
    }
  };

  useEffect(() => {
    updateDisplay();
  }, [num1, num2, operand, waitingForOperand]);

  const inputNumber = (event) => {
    if (!operand) {
      setNum1(num1 + event);
      // setDisplay(num1);
    } else {
      updateDisplay(event);
      setNum2(num2 + event);
      // setDisplay(num2);
    }
  };

  const handleClick = (event) => {
    setOperand(event);
    console.log({ event });
  };

  const doMath = () => {
    let result = parseInt(num1) * parseInt(num2);
    console.log({ result });
    setDisplay(result);
  };

  const clearAll = () => {
    setDisplay([]);
    setNum1([]);
    setNum2([]);
    setOperand(null);
    setWaitingForOperand(true);
  };

  return (
    <div className="widget">
      <div className={styles.calculatorBody}>
        {/* displays inputted number */}
        <div className={styles.calcDisplay}>
          <h1 className={styles.calcDispNums}>{display}</h1>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td onClick={clearAll}>C</td>
                <td>+/-</td>
                <td>%</td>
                <td>/</td>
              </tr>
              <tr>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(7)}
                  value="7"
                >
                  7
                </td>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(8)}
                  value="8"
                >
                  8
                </td>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(9)}
                  value="9"
                >
                  9
                </td>
                <td onClick={() => handleClick('*')} value="*">
                  *
                </td>
              </tr>
              <tr>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(4)}
                >
                  4
                </td>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(5)}
                >
                  5
                </td>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(6)}
                >
                  6
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(1)}
                >
                  1
                </td>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(2)}
                >
                  2
                </td>
                <td
                  className={styles.numberBtns}
                  onClick={() => inputNumber(3)}
                >
                  3
                </td>
                <td>+</td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  className={styles.numberBtns}
                  onClick={() => inputNumber(0)}
                >
                  0
                </td>

                <td>.</td>
                <td onClick={doMath}>=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
