import React from 'react';

import Pregunta from './Elementos/Pregunta.js';
import Respuesta from './Elementos/Respuesta.js';
import NombrePregunta from './Elementos/NombrePregunta.js';
import DragOptions from './Elementos/DragOptions.js';
import TargetOptions from './Elementos/TargetOptions.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 4,
            NombrePregunta:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    componentDidMount() {
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestion"+window.location.search)
        .then(response => {
            console.log(response);
            return response.ok?response.json():response.status
        })
        .then(json => {
            console.log(json);
            console.log(json.Drag.Opciones[0]);
            this.setState({
                cantidad: json.Cantidad,
                NombrePregunta: json.ID,
            });
        });
    }
    handleChange(event){
        this.setState({cantidad: event.target.value});
    }
    handleOnClick(event){
        window.location.href="index.html";
    }
    render() {
              //<a href="index.html">Index</a>
               //<h1>{this.state.pregunta}</h1>
        return (
            <div className="inicio">
                <form id="crear" action="http://localhost:8080/2CV13ID5IDP1/Modify" method="POST" encType="multipart/form-data">
                <br />
                    <h1>Editar pregunta con ID:</h1>
                        <NombrePregunta pregunta={this.state.NombrePregunta}/>
                    <ul className="prueba">
                    <br />
                    <li className="a"> Pregunta: <Pregunta texto={this.state.Pregunta}/> </li>
                    <br />
                    <li className="a"> Respuesta: <Respuesta/> </li>
                    </ul>
                    <div className="contenedor">
                    <br />
                    
            </div>
                    <br />
                    <DragOptions cantidad={this.state.cantidad}/>
                    <TargetOptions cantidad={this.state.cantidad}/>
            <div>


                    <div>
                    <br />
                    <br />
                        <input className="Boton BotonRegresar" type="button" value="Regresar" onClick={this.handleOnClick}/>
                    </div>    
            </div>
                </form>
            </div>
        );




    }
}