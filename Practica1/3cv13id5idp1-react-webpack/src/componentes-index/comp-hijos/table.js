import React from 'react';
import Leer from './Leer.js';

class Tabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preguntas: [],
        }
    }
    componentDidMount(){
        //Editar el fecth a "GetQuestions" una vez terminada la fase de desarrollo
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestions")
        .then(response =>{return response.ok? response.json():response.status})
        .then(
            (json)=>{
                console.log(json.map(el=>el.name));
                //En el map podemos obtener un Array
                this.setState({preguntas: json.map(el=>el.name)});
            }
        );
    }
    render() { 
        return <div>
            <table>
                <thead>
                    <tr key="Encabezado">
                        <th key="Nombre">Nombre de la Pregunta</th>
                        <th key="Accion">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.preguntas.map(el=><tr key={"body"+el}>
                        <th key={el}>{el}</th>
                        <th key={"btns"+el}><Leer pregunta={el}/>|<a href="modify.html">Modificar</a>|<a>Elimidar</a></th>
                    </tr>)}
                </tbody>
            </table>
        </div>;
    }
}
 
export default Tabla;