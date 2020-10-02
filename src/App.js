import React from 'react';
import './App.css';

// Other Challenges
import BinaryToDecimalConverter from './Components/BinarytoDecimalConverter/BinarytoDecimalConverter';
import BorderRadiusPreview from './Components/BorderRadiusPreview/BorderRadiusPreview';

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
    </div>
  );
}

export default App;
