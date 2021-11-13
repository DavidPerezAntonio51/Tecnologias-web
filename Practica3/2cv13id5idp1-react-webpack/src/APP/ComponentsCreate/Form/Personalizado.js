import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

class Personalizado extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Form.Group>
                <Form.Label>
                    Carga tu Propio {this.props.tipo} c:
                </Form.Label>
                <Form.Control type="file" name={this.props.tipo+"Personalizado"}/>
            </Form.Group>
         );
    }
}
 
export default Personalizado;