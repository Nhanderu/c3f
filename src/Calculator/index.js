import React, { Component } from 'react';
import Input from '../Input';
import './index.css';
import '../index.css';

export default class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      values: {},
      result: '',
      classes: {
        panelButtonA: 'panel-button panel-button-active',
        panelButtonB: 'panel-button',
        panelButtonC: 'panel-button',
        panelA: 'panel panel-active',
        panelB: 'panel',
        panelC: 'panel',
      },
    };

    this.changePanel = this.changePanel.bind(this);
    this.calculate = this.calculate.bind(this);
    this.updateValues = this.updateValues.bind(this);

  }

  changePanel({ target }) {

    const classes = {
      panelButtonA: 'panel-button',
      panelButtonB: 'panel-button',
      panelButtonC: 'panel-button',
      panelA: 'panel',
      panelB: 'panel',
      panelC: 'panel',
    };

    classes[target.attributes.panelfor.value] += ' panel-active';
    classes[target.attributes.panelbuttonfor.value] += ' panel-button-active';

    this.setState({ classes });
  }

  calculate() {

      const now = new Date();
      const day = now.getDay();
      const date = now.getDate();
      const month = now.getMonth();

      const a = this.state.values[`a-${day}`];
      const b = this.state.values[`b-${date}`];
      const c = this.state.values[`c-${month}`];
      const d = this.state.values.d;

      let result = a + b + c + d;
      if (isNaN(result)) result = 'erro';

      this.setState({ result });

  }

  updateValues({ target: {value, id} }) {
    let values = this.state.values;
    values[id] = parseInt(value.substr(-4), 10);
    this.setState({ values });
  }

  render() {
    return (
      <div className='container'>
        <div className='calculator'>
          <div className='input'>
            <input id='d' type='text' placeholder="d" onChange={this.updateValues} />
            <button id='calculate' onClick={this.calculate}>Calcular</button>
          </div>
          <span id='result'>{this.state.result}</span>
        </div>
        <div className='values'>
          <div className='panels-menu'>
            <button className={this.state.classes.panelButtonA} panelfor='panelA' panelbuttonfor='panelButtonA' onClick={this.changePanel}>a</button>
            <button className={this.state.classes.panelButtonB} panelfor='panelB' panelbuttonfor='panelButtonB' onClick={this.changePanel}>b</button>
            <button className={this.state.classes.panelButtonC} panelfor='panelC' panelbuttonfor='panelButtonC' onClick={this.changePanel}>c</button>
          </div>
          <div className='panels'>
            <div className={this.state.classes.panelA}>
              <div className='column'>
                <Input id='a-1' text='Segunda' onChange={this.updateValues} />
                <Input id='a-2' text='Terça' onChange={this.updateValues} />
                <Input id='a-3' text='Quarta' onChange={this.updateValues} />
                <Input id='a-4' text='Quinta' onChange={this.updateValues} />
                <Input id='a-5' text='Sexta' onChange={this.updateValues} />
                <Input id='a-6' text='Sábado' onChange={this.updateValues} />
                <Input id='a-0' text='Domingo' onChange={this.updateValues} />
              </div>
            </div>
            <div id='panel-b' className={this.state.classes.panelB}>
              <div className='column'>
                <Input id='b-1' text='01' onChange={this.updateValues} />
                <Input id='b-4' text='04' onChange={this.updateValues} />
                <Input id='b-7' text='07' onChange={this.updateValues} />
                <Input id='b-10' text='10' onChange={this.updateValues} />
                <Input id='b-13' text='13' onChange={this.updateValues} />
                <Input id='b-16' text='16' onChange={this.updateValues} />
                <Input id='b-19' text='19' onChange={this.updateValues} />
                <Input id='b-22' text='22' onChange={this.updateValues} />
                <Input id='b-25' text='25' onChange={this.updateValues} />
                <Input id='b-28' text='28' onChange={this.updateValues} />
                <Input id='b-31' text='31' onChange={this.updateValues} />
              </div>
              <div className='column'>
                <Input id='b-2' text='02' onChange={this.updateValues} />
                <Input id='b-5' text='05' onChange={this.updateValues} />
                <Input id='b-8' text='08' onChange={this.updateValues} />
                <Input id='b-11' text='11' onChange={this.updateValues} />
                <Input id='b-14' text='14' onChange={this.updateValues} />
                <Input id='b-17' text='17' onChange={this.updateValues} />
                <Input id='b-20' text='20' onChange={this.updateValues} />
                <Input id='b-23' text='23' onChange={this.updateValues} />
                <Input id='b-26' text='26' onChange={this.updateValues} />
                <Input id='b-29' text='29' onChange={this.updateValues} />
              </div>
              <div className='column'>
                <Input id='b-3' text='03' onChange={this.updateValues} />
                <Input id='b-6' text='06' onChange={this.updateValues} />
                <Input id='b-9' text='09' onChange={this.updateValues} />
                <Input id='b-12' text='12' onChange={this.updateValues} />
                <Input id='b-15' text='15' onChange={this.updateValues} />
                <Input id='b-18' text='18' onChange={this.updateValues} />
                <Input id='b-21' text='21' onChange={this.updateValues} />
                <Input id='b-24' text='24' onChange={this.updateValues} />
                <Input id='b-27' text='27' onChange={this.updateValues} />
                <Input id='b-30' text='30' onChange={this.updateValues} />
              </div>
            </div>
            <div className={this.state.classes.panelC}>
              <div className='column'>
                <Input id='c-0' text='Janeiro' onChange={this.updateValues} />
                <Input id='c-1' text='Fevereiro' onChange={this.updateValues} />
                <Input id='c-2' text='Março' onChange={this.updateValues} />
                <Input id='c-3' text='Abril' onChange={this.updateValues} />
                <Input id='c-4' text='Maio' onChange={this.updateValues} />
                <Input id='c-5' text='Junho' onChange={this.updateValues} />
                <Input id='c-6' text='Julho' onChange={this.updateValues} />
                <Input id='c-7' text='Agosto' onChange={this.updateValues} />
                <Input id='c-8' text='Setembro' onChange={this.updateValues} />
                <Input id='c-9' text='Outubro' onChange={this.updateValues} />
                <Input id='c-10' text='Novembro' onChange={this.updateValues} />
                <Input id='c-11' text='Dezembro' onChange={this.updateValues} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
