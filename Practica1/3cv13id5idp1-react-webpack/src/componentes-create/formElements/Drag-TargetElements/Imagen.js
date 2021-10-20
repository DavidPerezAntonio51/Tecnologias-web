import React, { Component } from 'react'

class Imagen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedFile: null,
         }
         this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e){
        this.setState({
            selectedFile: e.target.files[0]
        });
    }
    render() { 
        return ( 
            <input type="file" name={this.props.name} onChange={this.handleOnChange}/>
         );
    }
}
 
export default Imagen;