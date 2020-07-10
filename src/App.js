import React, { Component } from 'react';
import './App.css';

const onclick = () => {
  let r = '0000' + parseInt(Math.random() * 10000);
  document.getElementById("result").innerText = r.substr(r.length-4);
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input id="input" type="text" />
          <button id="calculate" onClick={onclick}>Calculate</button>
        </div>
        <span id="result"></span>
      </div>
    );
  }
}

export default App;
