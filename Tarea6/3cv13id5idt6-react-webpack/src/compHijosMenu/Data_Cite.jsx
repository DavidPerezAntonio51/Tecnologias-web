import React, { Component } from 'react';

class Data_Cite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cita: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({Cita: e.target.value});
  }
  render() {
    return (
    <div>
    <h2>Cite</h2>
    <h3>Ingresa la cita</h3>
    <input type="text" placeholder="" name="Cite" value={this.state.Cita} onChange={this.handleChange}/>
    </div>
    );
  }
}


 
export default Data_Cite;
