import React, { useState } from 'react';
import Input from '../Input';
import './index.css';
import '../index.css';

export default () => {

  const [values, setValues] = useState({});
  const [result, setResult] = useState('');
  const [classes, setClasses] = useState({
    buttonA: 'panel-button panel-button-active',
    buttonB: 'panel-button',
    buttonC: 'panel-button',
    panelA: 'panel panel-active',
    panelB: 'panel',
    panelC: 'panel',
  });

  const changePanel = ({ target }) => {

    const newClasses = {
      buttonA: 'panel-button',
      buttonB: 'panel-button',
      buttonC: 'panel-button',
      panelA: 'panel',
      panelB: 'panel',
      panelC: 'panel',
    };

    newClasses[target.attributes.panelfor.value] += ' panel-active';
    newClasses[target.attributes.buttonfor.value] += ' panel-button-active';

    setClasses(newClasses);
  }

  const calculate = () => {

      const now = new Date();
      const day = now.getDay();
      const date = now.getDate();
      const month = now.getMonth();

      const a = values[`a-${day}`];
      const b = values[`b-${date}`];
      const c = values[`c-${month}`];
      const d = values.d;

      let newResult = a + b + c + d;
      if (isNaN(newResult)) newResult = 'erro';

      setResult(newResult);
  }

  const updateValues = ({ target: { value, id } }) => {

    let newValues = values;
    newValues[id] = parseInt(value.substr(-4), 10);

    setValues(newValues);
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='input'>
          <input id='d' type='text' placeholder="d" onChange={updateValues} />
          <button id='calculate' onClick={calculate}>Calcular</button>
        </div>
        <span id='result'>{result}</span>
      </div>
      <div className='values'>
        <div className='panels-menu'>
          <button className={classes.buttonA} panelfor='panelA' buttonfor='buttonA' onClick={changePanel}>a</button>
          <button className={classes.buttonB} panelfor='panelB' buttonfor='buttonB' onClick={changePanel}>b</button>
          <button className={classes.buttonC} panelfor='panelC' buttonfor='buttonC' onClick={changePanel}>c</button>
        </div>
        <div className='panels'>
          <div className={classes.panelA}>
            <div className='column'>
              <Input id='a-1' text='Segunda' onChange={updateValues} />
              <Input id='a-2' text='Terça' onChange={updateValues} />
              <Input id='a-3' text='Quarta' onChange={updateValues} />
              <Input id='a-4' text='Quinta' onChange={updateValues} />
              <Input id='a-5' text='Sexta' onChange={updateValues} />
              <Input id='a-6' text='Sábado' onChange={updateValues} />
              <Input id='a-0' text='Domingo' onChange={updateValues} />
            </div>
          </div>
          <div id='panel-b' className={classes.panelB}>
            <div className='column'>
              <Input id='b-1' text='01' onChange={updateValues} />
              <Input id='b-4' text='04' onChange={updateValues} />
              <Input id='b-7' text='07' onChange={updateValues} />
              <Input id='b-10' text='10' onChange={updateValues} />
              <Input id='b-13' text='13' onChange={updateValues} />
              <Input id='b-16' text='16' onChange={updateValues} />
              <Input id='b-19' text='19' onChange={updateValues} />
              <Input id='b-22' text='22' onChange={updateValues} />
              <Input id='b-25' text='25' onChange={updateValues} />
              <Input id='b-28' text='28' onChange={updateValues} />
              <Input id='b-31' text='31' onChange={updateValues} />
            </div>
            <div className='column'>
              <Input id='b-2' text='02' onChange={updateValues} />
              <Input id='b-5' text='05' onChange={updateValues} />
              <Input id='b-8' text='08' onChange={updateValues} />
              <Input id='b-11' text='11' onChange={updateValues} />
              <Input id='b-14' text='14' onChange={updateValues} />
              <Input id='b-17' text='17' onChange={updateValues} />
              <Input id='b-20' text='20' onChange={updateValues} />
              <Input id='b-23' text='23' onChange={updateValues} />
              <Input id='b-26' text='26' onChange={updateValues} />
              <Input id='b-29' text='29' onChange={updateValues} />
            </div>
            <div className='column'>
              <Input id='b-3' text='03' onChange={updateValues} />
              <Input id='b-6' text='06' onChange={updateValues} />
              <Input id='b-9' text='09' onChange={updateValues} />
              <Input id='b-12' text='12' onChange={updateValues} />
              <Input id='b-15' text='15' onChange={updateValues} />
              <Input id='b-18' text='18' onChange={updateValues} />
              <Input id='b-21' text='21' onChange={updateValues} />
              <Input id='b-24' text='24' onChange={updateValues} />
              <Input id='b-27' text='27' onChange={updateValues} />
              <Input id='b-30' text='30' onChange={updateValues} />
            </div>
          </div>
          <div className={classes.panelC}>
            <div className='column'>
              <Input id='c-0' text='Janeiro' onChange={updateValues} />
              <Input id='c-1' text='Fevereiro' onChange={updateValues} />
              <Input id='c-2' text='Março' onChange={updateValues} />
              <Input id='c-3' text='Abril' onChange={updateValues} />
              <Input id='c-4' text='Maio' onChange={updateValues} />
              <Input id='c-5' text='Junho' onChange={updateValues} />
              <Input id='c-6' text='Julho' onChange={updateValues} />
              <Input id='c-7' text='Agosto' onChange={updateValues} />
              <Input id='c-8' text='Setembro' onChange={updateValues} />
              <Input id='c-9' text='Outubro' onChange={updateValues} />
              <Input id='c-10' text='Novembro' onChange={updateValues} />
              <Input id='c-11' text='Dezembro' onChange={updateValues} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};
