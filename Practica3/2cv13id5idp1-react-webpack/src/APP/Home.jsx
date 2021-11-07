import React, { Component } from 'react';
import Encabezado from './Encabezado.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Tabla from './ComponentsHome/Tabla.js';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                <Encabezado title={this.props.title}></Encabezado>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="outline-dark" as={Link}to="/2CV13ID5IDP3/create">Crear Pregunta</Button>
                        </Col>
                    </Row>
                </Container>
                <Tabla />
            </div>
         );
    }
}
 
export default Home;