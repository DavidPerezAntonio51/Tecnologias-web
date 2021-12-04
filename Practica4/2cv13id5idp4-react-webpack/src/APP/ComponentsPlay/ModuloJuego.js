import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ModuloMano from './ModuloMano.js';

class ModuloJuego extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ValorI: 1,
            ValorD: 1,
            RespuestaActual: 1,
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
        if (this.props.RespuestaCorrecta == this.state.RespuestaActual) {
            console.log("¡Exito!")
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <ModuloMano handlerUpdate={this.updateIzquierdo} />
                    </Col>
                    <Col>
                        <ModuloMano handlerUpdate={this.updateDerecho} />
                    </Col>
                    <Col md={5} lg={5}>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ModuloJuego;