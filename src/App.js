import React, { Component } from 'react';
import './App.css';

const calculate = () => {
  const rand = '0000' + parseInt(Math.random() * 10000);
  document.getElementById("result").innerText = rand.substr(rand.length-4);
};

const changePanel = ({ target }) => {

  for (const active of document.getElementsByClassName("panel-button-active"))
    active.classList.remove("panel-button-active");
  target.classList.add("panel-button-active");

  for (const active of document.getElementsByClassName("panel-active"))
    active.classList.remove("panel-active");
  document.getElementById(target.getAttribute("data-panel")).classList.add("panel-active");

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
        <div className="values">
          <div className="panels-menu">
            <button className="panel-button panel-button-active" data-panel="panel-a" onClick={changePanel}>a</button>
            <button className="panel-button" data-panel="panel-b" onClick={changePanel}>b</button>
            <button className="panel-button" data-panel="panel-c" onClick={changePanel}>c</button>
          </div>
          <div className="panels">
            <div id="panel-a" className="panel panel-active">
              <div className="column">
                <div className="row">
                  <label for="a-monday">Segunda</label>
                  <input id="a-monday" type="text" />
                </div>
                <div className="row">
                  <label for="a-tuesday">Terça</label>
                  <input id="a-tuesday" type="text" />
                </div>
                <div className="row">
                  <label for="a-wednesday">Quarta</label>
                  <input id="a-wednesday" type="text" />
                </div>
                <div className="row">
                  <label for="a-thursday">Quinta</label>
                  <input id="a-thursday" type="text" />
                </div>
                <div className="row">
                  <label for="a-friday">Sexta</label>
                  <input id="a-friday" type="text" />
                </div>
                <div className="row">
                  <label for="a-saturday">Sábado</label>
                  <input id="a-saturday" type="text" />
                </div>
                <div className="row">
                  <label for="a-sunday">Domingo</label>
                  <input id="a-sunday" type="text" />
                </div>
              </div>
            </div>
            <div id="panel-b" className="panel">
              <div className="column">
                <div className="row">
                  <label for="b-01">01</label>
                  <input id="b-01" type="text" />
                </div>
                <div className="row">
                  <label for="b-04">04</label>
                  <input id="b-04" type="text" />
                </div>
                <div className="row">
                  <label for="b-07">07</label>
                  <input id="b-07" type="text" />
                </div>
                <div className="row">
                  <label for="b-10">10</label>
                  <input id="b-10" type="text" />
                </div>
                <div className="row">
                  <label for="b-13">13</label>
                  <input id="b-13" type="text" />
                </div>
                <div className="row">
                  <label for="b-16">16</label>
                  <input id="b-16" type="text" />
                </div>
                <div className="row">
                  <label for="b-19">19</label>
                  <input id="b-19" type="text" />
                </div>
                <div className="row">
                  <label for="b-22">22</label>
                  <input id="b-22" type="text" />
                </div>
                <div className="row">
                  <label for="b-25">25</label>
                  <input id="b-25" type="text" />
                </div>
                <div className="row">
                  <label for="b-28">28</label>
                  <input id="b-28" type="text" />
                </div>
                <div className="row">
                  <label for="b-31">31</label>
                  <input id="b-31" type="text" />
                </div>
              </div>
              <div className="column">
                <div className="row">
                  <label for="b-02">02</label>
                  <input id="b-02" type="text" />
                </div>
                <div className="row">
                  <label for="b-05">05</label>
                  <input id="b-05" type="text" />
                </div>
                <div className="row">
                  <label for="b-08">08</label>
                  <input id="b-08" type="text" />
                </div>
                <div className="row">
                  <label for="b-11">11</label>
                  <input id="b-11" type="text" />
                </div>
                <div className="row">
                  <label for="b-14">14</label>
                  <input id="b-14" type="text" />
                </div>
                <div className="row">
                  <label for="b-17">17</label>
                  <input id="b-17" type="text" />
                </div>
                <div className="row">
                  <label for="b-20">20</label>
                  <input id="b-20" type="text" />
                </div>
                <div className="row">
                  <label for="b-23">23</label>
                  <input id="b-23" type="text" />
                </div>
                <div className="row">
                  <label for="b-26">26</label>
                  <input id="b-26" type="text" />
                </div>
                <div className="row">
                  <label for="b-29">29</label>
                  <input id="b-29" type="text" />
                </div>
              </div>
              <div className="column">
                <div className="row">
                  <label for="b-03">03</label>
                  <input id="b-03" type="text" />
                </div>
                <div className="row">
                  <label for="b-06">06</label>
                  <input id="b-06" type="text" />
                </div>
                <div className="row">
                  <label for="b-09">09</label>
                  <input id="b-09" type="text" />
                </div>
                <div className="row">
                  <label for="b-12">12</label>
                  <input id="b-12" type="text" />
                </div>
                <div className="row">
                  <label for="b-15">15</label>
                  <input id="b-15" type="text" />
                </div>
                <div className="row">
                  <label for="b-18">18</label>
                  <input id="b-18" type="text" />
                </div>
                <div className="row">
                  <label for="b-21">21</label>
                  <input id="b-21" type="text" />
                </div>
                <div className="row">
                  <label for="b-24">24</label>
                  <input id="b-24" type="text" />
                </div>
                <div className="row">
                  <label for="b-27">27</label>
                  <input id="b-27" type="text" />
                </div>
                <div className="row">
                  <label for="b-30">30</label>
                  <input id="b-30" type="text" />
                </div>
              </div>
            </div>
            <div id="panel-c" className="panel">
              <div className="column">
                <div className="row">
                  <label for="c-january">Janeiro</label>
                  <input id="c-january" type="text" />
                </div>
                <div className="row">
                  <label for="c-february">Fevereiro</label>
                  <input id="c-february" type="text" />
                </div>
                <div className="row">
                  <label for="c-march">Março</label>
                  <input id="c-march" type="text" />
                </div>
                <div className="row">
                  <label for="c-april">Abril</label>
                  <input id="c-april" type="text" />
                </div>
                <div className="row">
                  <label for="c-may">Maio</label>
                  <input id="c-may" type="text" />
                </div>
                <div className="row">
                  <label for="c-june">Junho</label>
                  <input id="c-june" type="text" />
                </div>
                <div className="row">
                  <label for="c-july">Julho</label>
                  <input id="c-july" type="text" />
                </div>
                <div className="row">
                  <label for="c-august">Agosto</label>
                  <input id="c-august" type="text" />
                </div>
                <div className="row">
                  <label for="c-september">Setembro</label>
                  <input id="c-september" type="text" />
                </div>
                <div className="row">
                  <label for="c-october">Outubro</label>
                  <input id="c-october" type="text" />
                </div>
                <div className="row">
                  <label for="c-november">Novembro</label>
                  <input id="c-november" type="text" />
                </div>
                <div className="row">
                  <label for="c-december">Dezembro</label>
                  <input id="c-december" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
