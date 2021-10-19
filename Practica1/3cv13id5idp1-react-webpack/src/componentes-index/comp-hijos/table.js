import React from 'react'

class Tabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preguntas:["Pregunta 1","Pregunta 2"],
        }
    }
    componentDidMount(){
        try{
            

        }catch(err){

        }
    }
    render() { 
        return <div>
            <table>
                <thead>
                    <tr>
                        <th key="Nombre">Nombre de la Pregunta</th>
                        <th key="Accion">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.preguntas.map(el=><tr>
                        <th>{el}</th>
                        <th><a href="view.html">Leer</a>|<a href="modify.html">Modificar</a>|<a>Elimidar</a></th>
                    </tr>)}
                </tbody>
            </table>
        </div>;
    }
}
 
export default Tabla;