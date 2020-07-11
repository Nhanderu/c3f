import React from 'react';
import '../index.css';

export default (props) => {
  return (
    <div className='row'>
      <label htmlFor={props.id}>{props.text}</label>
      <input id={props.id} type='text' onChange={props.onChange} />
    </div>
  );
}
