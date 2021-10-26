import React from 'react'

class Pregunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Pregunta: ""
         }
         this.handleOnChange = this.handleOnChange.bind(this);
    }
    componentDidMount() {
        fetch("http://localhost:8080/2CV13ID5IDP1/GetQuestion"+window.location.search)
        .then(response => {
            return response.ok?response.json():response.status
        })
        .then(json => {
            this.setState({
                Pregunta: json.Texto
            });
        });
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