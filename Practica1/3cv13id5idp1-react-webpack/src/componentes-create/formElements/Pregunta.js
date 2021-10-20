import React from 'react'

class Pregunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Pregunta:""
         }
         this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        this.setState({
            Pregunta: event.target.value
        });
    }
    render() { 
        return (
            <input type="text" name="Pregunta" value={this.state.Pregunta} onChange={this.handleOnChange} placeholder="Escriba aquí la Pregunta"/>
        );
    }
}
 
export default Pregunta;