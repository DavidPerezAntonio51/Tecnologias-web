import React, { Component } from 'react';

//<object type="application/pdf" data="/media/examples/In-CC0.pdf" width="250" height="200"> </object>


class Data_Object  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: "1",
      Ancho: "",
      Alto: ""
    }
    this.handleChangeObject = this.handleChangeObject.bind(this);
    this.handleChangeAncho = this.handleChangeAncho.bind(this);
    this.handleChangeAlto = this.handleChangeAlto.bind(this);
  }
  handleChangeObject(e){
    this.setState({object: e.target.value});
  }
  handleChangeAncho(e) {
    this.setState({Ancho: e.target.value});
  }
  handleChangeAlto(e){
    this.setState({Alto: e.target.value});
  }
  render() {
    return (
    <div> 
    <h2>Imagen</h2>
    <h3>Ingresa el objeto</h3>   
          <select name="Object" value={this.state.object} onChange={this.handleChangeObject}>
            <option value="1"> Imagen1</option>
            <option value="value2">Objeto2</option>
            <option value="value3">Objeto3</option>
            <option value="value4">Objeto4</option>
            <option value="value5">Objeto5</option>
          </select>

    <h3>Indica el tamaño de ancho del objeto.</h3>
    <input type="text" placeholder="" name="Ancho" value={this.state.Ancho} onChange={this.handleChangeAncho} />
    <h3>	Indica el tamaño de alto del objeto.</h3>
    <input type="text" placeholder="" name="Alto" value={this.state.Alto} onChange={this.handleChangeAlto} />
    </div>
    );
  }
}
export default Data_Object;
