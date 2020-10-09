import React, { useState } from 'react';
import styles from '../Calculator/calculator.module.css';

function Calculator() {
  return (
    <div className="widget">
      <div className={styles.calculatorBody}>
        <div className={styles.calcDisplay}>
          <h1 className={styles.calcDispNums}>100100</h1>
        </div>
        {/* <div className={styles.buttonContainer}>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
          <div className={styles.calcButtons}>0</div>
        </div> */}

        <div className={styles.calcBody}>
          <table>
            <tbody>
              <tr align="left">
                <td>^n</td>
                <td>C</td>
              </tr>
              <tr>
                <td className="numberBtns">7</td>
                <td className="numberBtns">8</td>
                <td className="numberBtns">9</td>
                <td>%</td>
                <td>+/-</td>
              </tr>
              <tr>
                <td className="numberBtns">4</td>
                <td className="numberBtns">5</td>
                <td className="numberBtns">6</td>
                <td>✖️</td>
                <td>➗</td>
              </tr>
              <tr>
                <td className="numberBtns">1</td>
                <td className="numberBtns">2</td>
                <td className="numberBtns">3</td>
                <td rowspan="2">➕</td>
                <td>➖</td>
              </tr>
              <tr>
                <td className="numberBtns">0</td>
                <td className="numberBtns">00</td>
                <td>.</td>
                <td>=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
