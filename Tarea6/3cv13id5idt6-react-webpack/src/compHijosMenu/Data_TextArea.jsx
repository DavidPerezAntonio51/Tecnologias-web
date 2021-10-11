import React, { Component } from 'react';

class Data_TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({texto: e.target.value});
  }
  render() {
    return (
    <div>
      <h2>TextArea</h2>
      <h3>Introduce el texto</h3>
      <textarea name="texto" value={this.state.texto} onChange={this.handleChange} rows="10" cols="60"/>
      <h3>Ingresa el tamaño de las filas</h3>
      <input type="text" placeholder="" name="TextArea1"/>
      <h3>Ingresa el tamaño de las columnas</h3>
      <input type="text" placeholder="" name="TextArea2"/>
    </div>

    </div>
    );
  }
}


 
export default Data_TextArea;
