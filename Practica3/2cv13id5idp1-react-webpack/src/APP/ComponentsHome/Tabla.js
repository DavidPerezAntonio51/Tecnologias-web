import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Acciones from './Acciones.js';

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
                                <th>
                                    <Container>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">
                                                Nombre de la Pregunta
                                            </Col>
                                        </Row>
                                    </Container>
                                </th>
                                <th>
                                    <Container>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">
                                                Acciones
                                            </Col>
                                        </Row>
                                    </Container>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Preguntas.map(
                                pregunta =>
                                    <tr key={"fila" + pregunta}>
                                        <td key={"Nombre" + pregunta}>
                                            <Container>
                                                <Row className="justify-content-md-center">
                                                    <Col md="auto">
                                                        <h4>{pregunta}</h4>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </td>
                                        <td key={"Actions" + pregunta}><Acciones pregunta={pregunta} /></td>
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