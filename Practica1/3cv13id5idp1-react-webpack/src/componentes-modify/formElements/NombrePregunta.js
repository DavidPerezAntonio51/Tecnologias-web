import React from 'react'

class NombrePregunta extends React.Component {
    constructor(props) {
        super(props)
    }
    render() { 
        return(
            <input className="NombreP" type="text" name="NombrePregunta" placeholder="Nombre de la Pregunta" value={this.props.pregunta} readOnly/>
        );
    }
}
 
export default NombrePregunta;