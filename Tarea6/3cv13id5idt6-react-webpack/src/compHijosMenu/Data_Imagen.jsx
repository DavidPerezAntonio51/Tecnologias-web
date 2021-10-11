import React, { Component } from 'react';

class Data_Imagen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'value1'};

    this.handleChange = this.handleChange.bind(this);
  }
  //Manejador de Evento onChange
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
    <div>
    <h2>Imagen</h2>
    <h3>Ingresa la imagen</h3>   
    <select value={this.state.value} onChange={this.handleChange}>
            <option value="value1"selectedValue> Imagen1</option>
            <option value="value2">Imagen2</option>
            <option value="value3">Imagen3</option>
            <option value="value4">Imagen4</option>
            <option value="value5">Imagen5</option>
          </select>

    <h3>Indica el tamaño de ancho de la imagen.</h3>
    <input type="text" placeholder="" name="Imagen1"/>
    <h3>	Indica el tamaño de alto del video.</h3>
    <input type="text" placeholder="" name="Imagen2"/>
    </div>
    );
  }
}


 
export default Data_Imagen;
