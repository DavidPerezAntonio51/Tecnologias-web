import React, { Component } from 'react'

class Respuesta extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Respuesta:"",
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
                Respuesta: json.Respuesta
            });
        });
    }
    handleOnChange(event){
        this.setState({Respuesta: event.target.value});
    }
    render() { 
        return ( 
            <input type="text" name="Respuesta" value={this.state.Respuesta} onChange={this.handleOnChange} placeholder="Escriba la respuesta"/>
         );
    }
}

export default Respuesta;