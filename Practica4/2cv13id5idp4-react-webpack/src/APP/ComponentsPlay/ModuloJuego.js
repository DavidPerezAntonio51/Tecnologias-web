import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ModuloMano from './ModuloMano.js';

class ModuloJuego extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ValorI: 1,
            ValorD: 1,
            Resultado: 1,
        }
        this.updateIzquierdo = this.updateIzquierdo.bind(this);
        this.updateDerecho = this.updateDerecho.bind(this);
    }
    updateIzquierdo(valor){
        this.setState({
            ValorI: valor
        })
    }
    updateDerecho(valor){
        this.setState({
            ValorD: valor
        })
    }
    render() {
        return (
            <Container>
            <Row>
                <Col>
                    <ModuloMano handlerUpdate={this.updateIzquierdo}/>
                </Col>
                <Col>
                    <ModuloMano handlerUpdate={this.updateDerecho}/>
                </Col>
                <Col md={2} lg={5}>
                </Col>
            </Row>
            </Container>
        );
    }
}

export default ModuloJuego;