import React, { Component } from 'react'

class Respuesta extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Respuesta:"",
         }
         this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event){

    }
    render() { 
        return ( 
            <input type="text" name="Respuesta" value={this.state.Respuesta} onChange={this.handleOnChange} placeholder="Escriba la respuesta"/>
         );
    }
}
 
export default Respuesta;