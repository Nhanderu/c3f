import React, { Component } from 'react';
import './App.css';

const calculate = () => {
  let rand = '0000' + parseInt(Math.random() * 10000);
  document.getElementById("result").innerText = rand.substr(rand.length-4);
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="input">
            <input id="input" type="text" />
            <button id="calculate" onClick={calculate}>Calcular</button>
          </div>
          <span id="result"></span>
        </div>
        <div className="values"></div>
      </div>
    );
  }
}

export default App;
