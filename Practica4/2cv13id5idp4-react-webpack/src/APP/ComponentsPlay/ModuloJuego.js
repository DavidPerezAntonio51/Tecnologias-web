import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ModuloMano from './ModuloMano.js';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class ModuloJuego extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ValorI: 10,
            ValorD: 10,
            RespuestaActual: 1,
            Color: "fondodav"
        }
        this.updateIzquierdo = this.updateIzquierdo.bind(this);
        this.updateDerecho = this.updateDerecho.bind(this);
    }
    updateIzquierdo(valor) {
        this.setState({
            ValorI: valor
        })
    }
    updateDerecho(valor) {
        this.setState({
            ValorD: valor
        })
    }
    componentDidUpdate(prevPops, prevState) {
        if (this.state.ValorD != prevState.ValorD) {
            this.setState({
                RespuestaActual: this.state.ValorI / this.state.ValorD
            })
        }
        if (this.state.ValorI != prevState.ValorI) {
            this.setState({
                RespuestaActual: this.state.ValorI / this.state.ValorD
            })
        }
        console.log(this.state.RespuestaActual)
        if (this.props.RespuestaCorrecta == this.state.RespuestaActual && this.state.Color!=prevState.Color) {
            console.log("¡Exito!")
            /*this.setState({
                Color:"fondotrue"
            })*/
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col className={this.state.Color}>
                        <ModuloMano handlerUpdate={this.updateIzquierdo} />
                    </Col>
                    <Col className={this.state.Color}>
                        <ModuloMano handlerUpdate={this.updateDerecho} />
                    </Col>
                    <Col md={5} lg={5}>
                        <Container>
                            <Row>
                                <Col>
                                    <Stack gap={3}>
                                        <Button as={Link} to="/2CV13ID5IDP4/home" size="lg" variant="outline-light">Menu Principal </Button>
                                    </Stack>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ModuloJuego;