import React, { Component } from 'react';
import Encabezado from './Encabezado.jsx';
import {Container, Row, Col} from 'react-bootstrap';
import Formulario from './ComponentsCreate/FormularioCrear.js';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

class Crear extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ValorI: 1,
            ValorD: 1,
         }
    }   
    render() { 
        return ( 
            <Container>
                <Row>
                    <Encabezado title={this.props.title}></Encabezado>
                </Row>
                <br/>
                <br/>
                <Row className="justify-content-md-center">
                <Container>
                    <Row>
                        <Col md={5} lg={4}>
                            <Formulario/>
                        </Col>
                        <Col md={7}>
                            <Encabezado title={"Prueba tu ejercicio"}></Encabezado>
                        </Col>
                    </Row>
                </Container>
                </Row>
               
                <Row>
                    <Col>
                        <Button size="lg" variant="outline-dark">Regresar</Button>
                    </Col>
                    <Col>
                        <Button size="lg" as="input" type="submit" value="Guardar" variant="outline-dark" form="formulario"/>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default Crear;