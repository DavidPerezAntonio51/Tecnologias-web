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
        .then(response =>{
            console.log(response);
            return response.ok? response.json():response.status})
        .then(
            (json)=>{
                console.log(json);
                //En el map podemos obtener un Array
                //this.setState({preguntas: json.map(el=>el.name)});
            }
        );
    }
    render() { 
        return <div>
            <br />
            <table>
                <thead>
                    <tr key="Encabezado">
                        <th className="Nombre" key="Nombre">Nombre de la Pregunta</th>
                        <th className="Nombre" key="NombreAccion" key="Accion">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.preguntas.map(el=><tr key={"body"+el}>
                        <th className="CNombre" key={el}>{el}</th>
                        <th className="CAccion" key={"btns"+el}><Leer pregunta={el}/>|<a href="modify.html">Modificar</a>|<a>Eliminar</a></th>
                    </tr>)}
                </tbody>
            </table>
        </div>;
    }
}
 
export default Tabla;