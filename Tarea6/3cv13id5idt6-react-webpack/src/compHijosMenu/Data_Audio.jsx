import React, { Component } from 'react';

class Data_Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Audio: "Audio1",
      AutoLoop: "true"
    }
    this.handleOnChangeCB1 = this.handleOnChangeCB1.bind(this);
    this.handleOnChangeCB2 = this.handleOnChangeCB2.bind(this);
  }
  handleOnChangeCB1(event) {
    this.setState({Audio: event.target.value});
  }
  handleOnChangeCB2(event){
    this.setState({AutoLoop: event.target.value});
  }
  render() {
    return (
    <div>
    <h2>Audio</h2>
      <h3>Elige el audio</h3>    
      <select name="Audio0" value={this.state.Audio} onChange={this.handleOnChangeCB1}>
        <option value="Audio1">Audio1</option>
        <option value="Audio2">Audio2</option>
        <option value="Audio3">Audio3</option>
      </select>

      <h3>Auto loop?</h3>    
      <select name="Loop" value={this.state.AutoLoop} onChange={this.handleOnChangeCB2}>
      <option value="false">No</option>
      <option value="true">Si</option>
      </select>


    
    </div>
    );
  }
}


 
export default Data_Audio;
