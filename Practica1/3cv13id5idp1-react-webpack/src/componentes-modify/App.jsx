import React from 'react';
import Pregunta from './formElements/Pregunta.js';
import Respuesta from './formElements/Respuesta.js';
import DragOptions from './formElements/DragOptions.js';
import TargetOptions from './formElements/TargetOptions.js';
import NombrePregunta from './formElements/NombrePregunta.js';

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
        //Editar Action al terminar desarrollo a "create"
        return (
            <div className="inicio">
                <form id="crear" action="http://localhost:8080/2CV13ID5IDP1/Modify" method="POST" encType="multipart/form-data">
                    <h1>Editar pregunta con ID: <NombrePregunta pregunta={this.state.NombrePregunta}/></h1>
                    <ul className="prueba">
                    <br />
                    <li className="a"> Pregunta: <Pregunta texto={this.state.Pregunta}/> </li>
                    <br />
                    <strong className="NOTA">NOTA: Asegurese de que haya un ";" entre cada respuesta</strong>
                    <br />
                    <br />
                    <li className="a"> Respuesta: <Respuesta/> </li>
                    </ul>
                    <div className="contenedor">
                        <p>¿Deseas</p>
                        <ul className="OMG">
                            <li>2 imagenes?</li>
                            <li>3 imagenes?</li>
                            <li>4 imagenes?</li>
                            <li>5 imagenes?</li>
                            <li>6 imagenes?</li>
                    </ul>
                    <br />
                    
                    <br />
                    <select value={this.state.cantidad} onChange={this.handleChange} name="Cantidad">
                        <option value="2">2 Imagenes</option>
                        <option value="3">3 Imagenes</option>
                        <option value="4">4 Imagenes</option>
                        <option value="5">5 Imagenes</option>
                        <option value="6">6 Imagenes</option>
                    </select>
            </div>
                    <br />
                    <br />
                    <strong className="NOTA">NOTA: Todos los archivos deben subirse nuevamente</strong>
                    <br />
                    <DragOptions cantidad={this.state.cantidad}/>
                    <TargetOptions cantidad={this.state.cantidad}/>
            <div>
            <br />
                    <br />
                        <input className="Boton" type="submit" value="Guardar"/>
                        <input className="Boton" type="button" value="Regresar" onClick={this.handleOnClick}/>
            </div>
                </form>
            </div>
        );
    }
}