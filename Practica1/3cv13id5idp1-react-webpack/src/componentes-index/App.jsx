import React from 'react';
import Tabla from './comp-hijos/table.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //Bindeo de funciones
        this.handleonClickCrear = this.handleonClickCrear.bind(this);
    }
    handleonClickCrear(event){
        //redireccionar a la pagina de crear Pregunta
        window.location="create.html";
    }
    render() {
        return (
            <div>
                <h1>CREAR, ALTAS, BAJAS Y CAMBIOS</h1>
                <input className="Boton BotonCNP" type="button" onClick={this.handleonClickCrear} value="Crear Nueva Pregunta"/>
                <Tabla />
            </div>
        );
    }
}