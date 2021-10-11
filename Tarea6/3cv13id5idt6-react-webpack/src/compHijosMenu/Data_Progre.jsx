import React, { Component } from 'react';

class Data_Progre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actual: "",
      maximo: ""
    }
    this.handleChangeActual = this.handleChangeActual.bind(this);
    this.handleChangeMaximo = this.handleChangeMaximo.bind(this);
  }
  handleChangeActual(e) {
    this.setState({actual: e.target.value});
  }
  handleChangeMaximo(e) {
    this.setState({maximo: e.target.value});
  }
  render() {
    return (
    <div>
    <h2>Progress</h2>
    <h3>Ingresa el valor actual</h3>
    <input type="text" placeholder="" name="Actual" value={this.state.actual} onChange={this.handleChangeActual}/>
    <h3>Ingresa el valor maximo</h3>
    <input type="text" placeholder="" name="Maximo"value={this.state.maximo} onChange={this.handleChangeMaximo}/>
    </div>

    );
  }
}


 
export default Data_Progre;
