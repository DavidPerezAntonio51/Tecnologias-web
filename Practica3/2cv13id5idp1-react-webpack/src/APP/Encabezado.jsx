import React, { Component } from 'react'

class Encabezado extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <h1>{this.props.titulo}</h1>
            </div>
            
         );
    }
}
 
export default Encabezado;