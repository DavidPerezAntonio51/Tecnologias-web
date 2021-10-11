import React, { Component } from 'react';

class Data_Embed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      src: "",
      type: "",
      width: ""
    }
    this.handleChangeAltura = this.handleChangeAltura.bind(this);
    this.handleChangeRecurso = this.handleChangeRecurso.bind(this);
    this.handleChangeTipo = this.handleChangeTipo.bind(this);
    this.handleChangeAncho = this.handleChangeAncho.bind(this);
  }
  handleChangeAltura(e){
    this.setState({height: e.target.value});
  }
  handleChangeRecurso(e){
    this.setState({src: e.target.value});
  }
  handleChangeTipo(e){
    this.setState({type: e.target.value});
  }
  handleChangeAncho(e){
    this.setState({width: e.target.value});
  }
  render() {
    return (
     //height, src, type, width 
    <div>
    <h2>Embed</h2>
    <h3>Ingresa la altura del recurso mostrada en píxeles.</h3>
    <input type="text" placeholder="" name="Alto" value={this.state.height} onChange={this.handleChangeAltura}/>
    <h3>Ingresa la dirección URL del recurso que se está incrustado.</h3>
    <input type="text" placeholder="" name="src" value={this.state.src} onChange={this.handleChangeRecurso}/>
    <h3>Ingresa el tipo MIME que se va a usar para la selección del plug-in para crear una instancia..</h3>
    <input type="text" placeholder="" name="type" value={this.state.type} onChange={this.handleChangeTipo}/>
    <h3>Ingresa el ancho del recurso mostrado en píxeles CSS.</h3>
    <input type="text" placeholder="" name="Ancho" value={this.state.width} onChange={this.handleChangeAncho}/>
    </div>
    );
  }
}


 
export default Data_Embed;
