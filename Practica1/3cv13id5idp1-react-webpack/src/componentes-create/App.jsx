import React from 'react';
import NombrePregunta from './formElements/NombrePregunta.js';
import Pregunta from './formElements/Pregunta.js';
import Respuesta from './formElements/Respuesta.js';
import DragOptions from './formElements/DragOptions.js';
import TargetOptions from './formElements/TargetOptions.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: 4,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleChange(event){
        this.setState({cantidad: event.target.value});
    }
    handleOnClick(event){
        window.location.href="index.html";
    }
    render() {
        //Editar Action al terminar desarrollo a "create"
        return (
            <div class="inicio">
                <h1>Crear una Nueva Pregunta</h1>
                <form id="crear" action="http://localhost:8080/2CV13ID5IDP1/create" method="POST" encType="multipart/form-data">
                    <ul>
                        <li class="a">Nombre de la Pregunta: <NombrePregunta/></li>
                    <br />
                    <li class="b"> Pregunta: <Pregunta/> </li>
                    <br />
                    <strong class="NOTA">Asegurese de que haya un ";" entre cada respuesta</strong>
                    <br />
                    <br />
                    <li class="c"> Respuesta: <Respuesta/> </li>
                    <br />
                    </ul>
                    ¿Cuantas Imagenes Desea? 
                    <select value={this.state.cantidad} onChange={this.handleChange}>
                        <option value="2">2 Imagenes</option>
                        <option value="3">3 Imagenes</option>
                        <option value="4">4 Imagenes</option>
                        <option value="5">5 Imagenes</option>
                        <option value="6">6 Imagenes</option>
                    </select>
                    <br />
                    <DragOptions cantidad={this.state.cantidad}/>
                    <TargetOptions cantidad={this.state.cantidad}/>
                    <div>
                        <input type="submit" value="Crear"/>
                        <input type="button" value="Regresar" onClick={this.handleOnClick}/>
                    </div>
                </form>
            </div>
        );
    }
}