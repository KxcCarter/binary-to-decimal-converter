import React from 'react';
import './App.css';

// Other Challenges
import BinaryToDecimalConverter from './Components/BinarytoDecimalConverter/BinarytoDecimalConverter';
import BorderRadiusPreview from './Components/BorderRadiusPreview/BorderRadiusPreview';
import Calculator from './Components/Calculator/Calculator';
import RomanToDecimal from './Components/RomanToDecimalConverter/RomanToDecimalConverter';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Practice Widgets</h1>
      </header>
      <BinaryToDecimalConverter />
      <hr className="app-hr"></hr>
      <BorderRadiusPreview />
      <hr className="app-hr"></hr>

      <Calculator />

      <hr className="app-hr"></hr>
      <RomanToDecimal />
    </div>
  );
}

export default App;
