import React from 'react';
import Data_Article from './compHijosMenu/Data_Article.jsx';
import Data_Audio from './compHijosMenu/Data_Audio.jsx';
import Data_Cite from './compHijosMenu/Data_Cite.jsx';
import Data_Embed from './compHijosMenu/Data_Embed.jsx';
import Data_Imagen from './compHijosMenu/Data_Imagen.jsx';
import Data_Object from './compHijosMenu/Data_Object.jsx';
import Data_Progre from './compHijosMenu/Data_Progre.jsx';
import Data_TextArea from './compHijosMenu/Data_TextArea.jsx';
import Data_Video from './compHijosMenu/Data_Imagen.jsx';


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
    render() {
      return (
        <form id="main">
          <label>
            Escoger etiqueta a utilizar
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Video">Video</option>
              <option value="Audio">Audio</option>
              <option value="Imagen">Imagen</option>
              <option value="Area">Area</option>
            </select>
          </label>
          {this.state.value=="Video"?<Data_Video/>:""}
          {this.state.value=="Audio"?<Data_Audio/>:""}
          {this.state.value=="Imagen"?<Data_Imagen/>:""}
        </form>
      );
    }
  }