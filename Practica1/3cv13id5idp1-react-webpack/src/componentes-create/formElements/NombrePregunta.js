import React from 'react'

class NombrePregunta extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Nombre: "",
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        this.setState({
            Nombre: e.target.value
        });
    }
    render() { 
        return(
            <input type="text" name="NombrePregunta" placeholder="Nombre de la Pregunta" value={this.state.Nombre} onChange={this.handleOnChange}/>
        );
    }
}
 
export default NombrePregunta;