import React, { Component } from 'react';

class Data_Imagen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Image: "1",
      Ancho: "",
      Alto: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAlto = this.handleChangeAlto.bind(this);
    this.handleChangeAncho = this.handleChangeAncho.bind(this);
  }
  //Manejador de Evento onChange
  handleChange(event) {
    this.setState({Image: event.target.value});
  }
  handleChangeAncho(e){
    this.setState({Ancho: e.target.value});
  }
  handleChangeAlto(e){
    this.setState({Alto: e.target.value});
  }
  render() {
    return (
    <div>
    <h2>Imagen</h2>
    <h3>Ingresa la imagen</h3>   
    <select value={this.state.value} onChange={this.handleChange} name="Imagen">
            <option value="1"> Imagen1</option>
            <option value="2">Imagen2</option>
            <option value="3">Imagen3</option>
            <option value="4">Imagen4</option>
            <option value="5">Imagen5</option>
          </select>

    <h3>Indica el tamaño de ancho de la imagen.</h3>
    <input type="text" placeholder="Ancho" value={this.state.Ancho} name="ancho" onChange={this.handleChangeAncho}/>
    <h3>	Indica el tamaño de alto de la imagen.</h3>
    <input type="text" placeholder="Alto" value={this.state.Alto} name="alto" onChange={this.handleChangeAlto}/>
    </div>
    );
  }
}


 
export default Data_Imagen;
