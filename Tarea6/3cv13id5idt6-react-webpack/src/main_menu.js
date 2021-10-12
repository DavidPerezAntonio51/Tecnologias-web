import React from 'react';
import Data_Article from './compHijosMenu/Data_Article.jsx';
import Data_Audio from './compHijosMenu/Data_Audio.jsx';
import Data_Cite from './compHijosMenu/Data_Cite.jsx';
import Data_Embed from './compHijosMenu/Data_Embed.jsx';
import Data_Imagen from './compHijosMenu/Data_Imagen.jsx';
import Data_Object from './compHijosMenu/Data_Object.jsx';
import Data_Progre from './compHijosMenu/Data_Progre.jsx';
import Data_TextArea from './compHijosMenu/Data_TextArea.jsx';
import Data_Video from './compHijosMenu/Data_Video.jsx';


export default class Main_Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Video'};

      this.handleChange = this.handleChange.bind(this);
    }
    //Manejador de Evento onChange
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    //Audio Revisado
    //Imagen Revisado
    //TextArea Revisado
    //Article Revisado
    //Embed Revisado
    //Object Revisado
    //Linea 34 redireccionar a Servlet1 antes de terminar para poder ejecutar build
    render() {
      return (
        <form id="main" action="Servlet1" method="GET">
          <label>
            Escoger etiqueta a utilizar
            <select value={this.state.value} onChange={this.handleChange} form="main" name="Etiqueta">
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
              <option value="Imagen">Imagen</option>
              <option value="TextArea">TextArea</option>
              <option value="Article">Article</option>
              <option value="Cite">Cite</option>
              <option value="Embed">Embed</option>
              <option value="Object">Object</option>
              <option value="Progress">Progress</option>
            </select>
          </label>
          {this.state.value=="Video"?<Data_Video/>:""}
          {this.state.value=="Audio"?<Data_Audio/>:""}
          {this.state.value=="Imagen"?<Data_Imagen/>:""}
          {this.state.value=="TextArea"?<Data_TextArea/>:""}
          {this.state.value=="Article"?<Data_Article/>:""}
          {this.state.value=="Cite"?<Data_Cite/>:""}
          {this.state.value=="Embed"?<Data_Embed/>:""}
          {this.state.value=="Object"?<Data_Object/>:""}
          {this.state.value=="Progress"?<Data_Progre/>:""}
          <input type="submit" value="Enviar" form="main"/>
        </form>
      );
    }
  }