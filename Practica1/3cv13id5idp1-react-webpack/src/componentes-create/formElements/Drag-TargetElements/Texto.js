import React, { Component } from 'react';

class Texto extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            texto:""
         }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event){
        this.setState({ 
            texto: event.target.value
            })
    }
    render() { 
        return ( 
            <input type="text" name={this.props.name} value={this.state.texto} onChange={this.handleOnChange} placeholder="Texto"/>
         );
    }
}
 
export default Texto;