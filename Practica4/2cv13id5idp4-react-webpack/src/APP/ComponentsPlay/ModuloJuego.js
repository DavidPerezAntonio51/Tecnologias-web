import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ModuloMano from './ModuloMano.js';

class ModuloJuego extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RelacionActual: 1,
        }
    }
    render() {
        return (
            <Row>
                <Col>
                    <ModuloMano objetos={this.props.objetosI} handlerOnDragEnd={this.props.handlerOnDragEndI}/>
                </Col>
                <Col>
                    <ModuloMano objetos={this.props.objetosD} handlerOnDragEnd={this.props.handlerOnDragEndD}/>
                </Col>
            </Row>
        );
    }
}

export default ModuloJuego;