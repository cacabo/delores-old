import React, { Component } from 'react';
import Radios from '../forms/Radios';

class RadiusSelect extends Component {
  render() {
    const options = [
      'Local',
      'State',
      'Nation',
    ];
    
    return (
      <Radios label="Radius" options={options} />
    )
  }
}

export default RadiusSelect;
