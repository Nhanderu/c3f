import React, { Component } from 'react';
import './App.css';

const calculate = () => {

  const now = new Date();
  const day = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();

  const a = parseInt(document.getElementById(`a-${day}`).value, 10);
  const b = parseInt(document.getElementById(`b-${date}`).value, 10);
  const c = parseInt(document.getElementById(`c-${month}`).value, 10);
  const d = parseInt(document.getElementById('d').value.substr(-4), 10);
  document.getElementById('result').innerText = a + b + c + d;

};

const changePanel = ({ target }) => {

  for (const active of document.getElementsByClassName('panel-button-active'))
    active.classList.remove('panel-button-active');
  target.classList.add('panel-button-active');

  for (const active of document.getElementsByClassName('panel-active'))
    active.classList.remove('panel-active');
  document.getElementById(target.getAttribute('data-panel')).classList.add('panel-active');

};

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='calculator'>
          <div className='input'>
            <input id='d' type='text' placeholder="d" />
            <button id='calculate' onClick={calculate}>Calcular</button>
          </div>
          <span id='result'></span>
        </div>
        <div className='values'>
          <div className='panels-menu'>
            <button className='panel-button panel-button-active' data-panel='panel-a' onClick={changePanel}>a</button>
            <button className='panel-button' data-panel='panel-b' onClick={changePanel}>b</button>
            <button className='panel-button' data-panel='panel-c' onClick={changePanel}>c</button>
          </div>
          <div className='panels'>
            <div id='panel-a' className='panel panel-active'>
              <div className='column'>
                <div className='row'>
                  <label htmlFor='a-1'>Segunda</label>
                  <input id='a-1' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='a-2'>Terça</label>
                  <input id='a-2' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='a-3'>Quarta</label>
                  <input id='a-3' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='a-4'>Quinta</label>
                  <input id='a-4' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='a-5'>Sexta</label>
                  <input id='a-5' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='a-6'>Sábado</label>
                  <input id='a-6' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='a-0'>Domingo</label>
                  <input id='a-0' type='text' />
                </div>
              </div>
            </div>
            <div id='panel-b' className='panel'>
              <div className='column'>
                <div className='row'>
                  <label htmlFor='b-1'>01</label>
                  <input id='b-1' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-4'>04</label>
                  <input id='b-4' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-7'>07</label>
                  <input id='b-7' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-10'>10</label>
                  <input id='b-10' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-13'>13</label>
                  <input id='b-13' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-16'>16</label>
                  <input id='b-16' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-19'>19</label>
                  <input id='b-19' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-22'>22</label>
                  <input id='b-22' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-25'>25</label>
                  <input id='b-25' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-28'>28</label>
                  <input id='b-28' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-31'>31</label>
                  <input id='b-31' type='text' />
                </div>
              </div>
              <div className='column'>
                <div className='row'>
                  <label htmlFor='b-2'>02</label>
                  <input id='b-2' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-5'>05</label>
                  <input id='b-5' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-8'>08</label>
                  <input id='b-8' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-11'>11</label>
                  <input id='b-11' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-14'>14</label>
                  <input id='b-14' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-17'>17</label>
                  <input id='b-17' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-20'>20</label>
                  <input id='b-20' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-23'>23</label>
                  <input id='b-23' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-26'>26</label>
                  <input id='b-26' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-29'>29</label>
                  <input id='b-29' type='text' />
                </div>
              </div>
              <div className='column'>
                <div className='row'>
                  <label htmlFor='b-3'>03</label>
                  <input id='b-3' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-6'>06</label>
                  <input id='b-6' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-9'>09</label>
                  <input id='b-9' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-12'>12</label>
                  <input id='b-12' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-15'>15</label>
                  <input id='b-15' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-18'>18</label>
                  <input id='b-18' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-21'>21</label>
                  <input id='b-21' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-24'>24</label>
                  <input id='b-24' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-27'>27</label>
                  <input id='b-27' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='b-30'>30</label>
                  <input id='b-30' type='text' />
                </div>
              </div>
            </div>
            <div id='panel-c' className='panel'>
              <div className='column'>
                <div className='row'>
                  <label htmlFor='c-0'>Janeiro</label>
                  <input id='c-0' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-1'>Fevereiro</label>
                  <input id='c-1' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-2'>Março</label>
                  <input id='c-2' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-3'>Abril</label>
                  <input id='c-3' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-4'>Maio</label>
                  <input id='c-4' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-5'>Junho</label>
                  <input id='c-5' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-6'>Julho</label>
                  <input id='c-6' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-7'>Agosto</label>
                  <input id='c-7' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-8'>Setembro</label>
                  <input id='c-8' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-9'>Outubro</label>
                  <input id='c-9' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-10'>Novembro</label>
                  <input id='c-10' type='text' />
                </div>
                <div className='row'>
                  <label htmlFor='c-11'>Dezembro</label>
                  <input id='c-11' type='text' />
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
