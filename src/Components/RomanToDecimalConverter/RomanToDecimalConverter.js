import React from 'react';
// import styles from '../BinarytoDecimalConverter/binToDec.module.css';

function romanToArabic(roman) {
  const numeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let romanArray = roman.split('').map((i) => numeralValues[i]);
  console.log({ romanArray });

  let result = 0;
  // let i = 0;
  const range = romanArray.length;
  console.log({ range });

  for (let i = 0; i < range; ) {
    if (i === 0) {
      result += romanArray[i];
      i++;
    } else if (
      romanArray[i] <= romanArray[i - 1] &&
      romanArray[i] >= romanArray[i + 1]
    ) {
      result += romanArray[i];
      i++;
    } else if (romanArray[i] < romanArray[i + 1]) {
      result += romanArray[i + 1] - romanArray[i];
      i += 2;
    }
    console.log({ i });
  }
  console.log({ result });

  // console.log(romanArray[i-1]);

  return result;
}

romanToArabic('MCXCIV');

function RomanToDecimal() {
  //   const [number, setNumber] = useState();
  //   const [binary, setBinary] = useState();

  return <div className="widget">Roman To Decimal</div>;
}

export default RomanToDecimal;
