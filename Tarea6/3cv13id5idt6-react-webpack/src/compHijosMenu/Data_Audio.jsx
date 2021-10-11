import React, { Component } from 'react';

class Data_Audio extends React.Component {

  render() {
    return (
    <div>
    <h2>Audio</h2>
      <h3>Elige el audio</h3>    
      <select name="select Audio0">
        <option value="valueA1"selectedValue>Audio1</option>
        <option value="valueA2">Audio2</option>
        <option value="valueA3">Audio3</option>
      </select>

      <h3>Auto loop?</h3>    
      <select name="select audio">
      <option value="value1"selectedValue>No</option>
      <option value="value2">Si</option>
      </select>


    
    </div>
    );
  }
}


 
export default Data_Audio;
