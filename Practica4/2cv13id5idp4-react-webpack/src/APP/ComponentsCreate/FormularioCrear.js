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
        this.state = {
            Puntero: false,
            Radar: false,
        }
        this.handlerPointer = this.handlerPointer.bind(this);
        this.handlerRadar = this.handlerRadar.bind(this);
    }
    handlerPointer(event) {
        this.setState({
            Puntero: !this.state.Puntero,
        });
    }
    handlerRadar(event) {
        this.setState({
            Radar: !this.state.Radar,
        });
    }
    render() {
        return (
            <Form id="formulario" method="post" action="http://localhost:8080/2CV13ID5IDP3/saveQuestion" encType={this.state.Radar||this.state.Puntero?"multipart/form-data":"application/x-www-form-urlencoded"}>
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
                            <Puntero changeEnctype={this.handlerPointer}/>
                        </Col>
                        <Col>
                            <Radar changeEnctype={this.handlerRadar}/>
                        </Col>
                    </Row>

                </Stack>
            </Form>
        );
    }
}

export default Formulario;