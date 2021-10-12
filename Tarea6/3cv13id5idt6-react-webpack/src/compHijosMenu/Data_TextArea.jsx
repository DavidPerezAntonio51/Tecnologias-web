import React, { Component } from 'react';

class Data_TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      filas: "",
      columnas: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFila = this.handleChangeFila.bind(this);
    this.handleChangeColumna = this.handleChangeColumna.bind(this);
  }
  handleChange(e) {
    this.setState({texto: e.target.value});
  }
  handleChangeFila(e){
    this.setState({filas: e.target.value});
  }
  handleChangeColumna(e){
    this.setState({columnas: e.target.value});
  }
  render() {
    return (
    <div>
      <h2>TextArea</h2>
      <h3>Introduce el texto</h3>
      <textarea name="texto" value={this.state.texto} onChange={this.handleChange} rows="10" cols="60"/>
      <h3>Ingresa el tamaño de las filas</h3>
      <input type="text" placeholder="" name="rows" value={this.state.filas} onChange={this.handleChangeFila}/>
      <h3>Ingresa el tamaño de las columnas</h3>
      <input type="text" placeholder="" name="col" value={this.state.columnas} onChange={this.handleChangeColumna}/>
    </div>
    );
  }
}


 
export default Data_TextArea;
