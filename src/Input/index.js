import React, { Component } from 'react';
import '../index.css';

export default class Input extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <label htmlFor={this.props.id}>{this.props.text}</label>
        <input id={this.props.id} type='text' onChange={this.props.onChange} />
      </div>
    );
  }

}
