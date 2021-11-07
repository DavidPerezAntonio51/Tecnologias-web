import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Preguntas: ["Pre1", "Pre2", "Pre3"],
        }
    }
    render() {
        return ( 
            <Container>
                <Row>
                    <Col>
                        <h2>Preguntas</h2>
                    </Col>
                </Row>
                <Row>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Nombre de la Pregunta</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Preguntas.map(
                                el=>
                                    <tr key={"fila"+el}>
                                        <td key={"Nombre"+ el}>{el}</td>
                                        <td key={"Actions"+el}>{el}</td>
                                    </tr>
                            )}
                        </tbody>
                    </Table>
                </Row>
                
            </Container>
         );
    }
}
 
export default Tabla;