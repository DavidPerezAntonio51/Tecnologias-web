import React, { Component } from 'react';
import Encabezado from './Encabezado.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './ComponentsCreate/FormularioCrear.js';
import ModuloJuego from './ComponentsPlay/ModuloJuego.js';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

class Crear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ValorI: 1,
            ValorD: 1,
            CanvasSize: 10,
            objetosI: [],
            objetosD: [],
            defaultPointer: 1,
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Encabezado title={this.props.title}></Encabezado>
                </Row>
                <br />
                <br />
                <Row className="justify-content-md-center">
                    <Container>
                        <Row>
                            <Col>
                                <Formulario />
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <br />
                <br />
                <Row >
                    <Col>
                        <Row>
                            <Button size="lg" variant="outline-dark">Regresar </Button>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <Row>
                                    <Button size="lg" as="input" type="submit" value="Guardar" variant="outline-dark" form="formulario" />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Crear;