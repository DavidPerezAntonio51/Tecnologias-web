import React, { Component } from 'react';

class Data_Article extends React.Component {
  render() {
    return (
    <div>
    <h2>Article</h2>

    <h3>Ingresa el Titulos</h3>
    <input type="text" placeholder="" name="arti1"/>
    <h3>Indica el contenido.</h3>
    <textarea name="arti2" value={this.state.texto} onChange={this.handleChange} rows="10" cols="60"/>
    <h3>	Indica el pie de pagina.</h3>
    <input type="text" placeholder="" name="arti3"/>
    </div>


    );
  }
}


 
export default Data_Article;
