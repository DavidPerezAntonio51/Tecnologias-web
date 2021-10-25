import React from 'react';
import Leer from './Leer.js';
import Eliminar from './Eliminar.js';


class Tabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preguntas: [],
            
        }
        this.updateTable = this.updateTable.bind(this);
    }
    componentDidMount(){
        //Editar el fecth a "GetQuestions" una vez terminada la fase de desarrollo
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestions")
        .then(response =>{
            console.log(response);
            return response.ok? response.json():response.status})
        .then(
            (json)=>{
                console.log(json.Preguntas);
                //En el map podemos obtener un Array
                this.setState({preguntas: json.Preguntas.map(el=>el.name)});
            }
        );
    }
    /*
    componentDidUpdate(){
        //Editar el fecth a "GetQuestions" una vez terminada la fase de desarrollo
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestions")
        .then(response =>{
            console.log(response);
            return response.ok? response.json():response.status})
        .then(
            (json)=>{
                console.log(json.Preguntas);
                //En el map podemos obtener un Array
                this.setState({preguntas: json.Preguntas.map(el=>el.name)});
            }
        );
    }*/
    updateTable(e){
        //Editar el fecth a "GetQuestions" una vez terminada la fase de desarrollo
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestions")
        .then(response =>{
            console.log(response);
            return response.ok? response.json():response.status})
        .then(
            (json)=>{
                console.log(json.Preguntas);
                //En el map podemos obtener un Array
                this.setState({preguntas: json.Preguntas.map(el=>el.name)});
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
                        <th className="CAccion" key={"btns"+el}><Leer pregunta={el}/>|<a href="modify.html">Modificar</a>|<Eliminar pregunta={el} update={this.updateTable}/></th>
                    </tr>)}
                </tbody>
            </table>
        </div>;
    }
}
 
export default Tabla;