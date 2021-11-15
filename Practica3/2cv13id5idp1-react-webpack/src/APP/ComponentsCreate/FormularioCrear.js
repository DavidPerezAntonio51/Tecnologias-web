import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import NombrePregunta from './Form/NombrePregunta.js';
import Proporcion from './Form/Proporcion.js';
import Lienzo from './Form/Lienzos.js';
import Puntero from './Form/Puntero.js';
import Radar from './Form/Radar.js';
import Stack from 'react-bootstrap/Stack';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Form id="formulario">
                <Stack gap={3}>
                    <Row>
                        <Col>
                            <NombrePregunta />
                        </Col>
                        <Col>
                            <Proporcion />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Lienzo />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Puntero />
                        </Col>
                        <Col>
                            <Radar />
                        </Col>
                    </Row>

                </Stack>
            </Form>
        );
    }
}

export default Formulario;