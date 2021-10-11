import React, { Component } from 'react';

class Data_Article extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      titulo: "",
      texto: "",
      pie: ""
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePie = this.handleChangePie.bind(this);
  }
  handleChangeTitle(e){
    this.setState({titulo: e.target.value});
  }
  handleChangeText(e){
    this.setState({texto: e.target.value});
  }
  handleChangePie(e){
    this.setState({pie: e.target.value});
  }
  render() {
    return (
    <div>
    <h2>Article</h2>
    <h3>Ingresa el Titulos</h3>
    <input type="text" placeholder="" name="Titulo" onChange={this.handleChangeTitle} value={this.state.titulo}/>
    <h3>Indica el contenido.</h3>
    <textarea name="Articulo" onChange={this.handleChangeText} rows="10" cols="60" value={this.state.texto}/>
    <h3>	Indica el pie de pagina.</h3>
    <input type="text" placeholder="" name="Pie" onChange={this.handleChangePie} value={this.state.pie}/>
    </div>
    );
  }
}


 
export default Data_Article;
