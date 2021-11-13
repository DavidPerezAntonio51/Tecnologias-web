import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class NombrePregunta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nombre: "",
        }
        this.handlerOnChange = this.handlerOnChange.bind(this);
    }
    handlerOnChange(e) {
        this.setState({
            Nombre: e.target.value,
        });
    }
    render() {
        return (
            <Form.Group>
                <Form.Floating >
                    <Form.Control name="NombrePregunta" type="text" placeholder="Nombre de la Pregunta" value={this.state.Nombre} onChange={this.handlerOnChange} />
                    <label htmlFor="Nombre">Nombre de la Pregunta</label>
                </Form.Floating>
            </Form.Group>
        );
    }
}

export default NombrePregunta;