import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';


class Acciones extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                    <Stack direction="horizontal" gap={3}>
                        <Button as={Link} to="/2CV13ID5IDP3/play" variant="outline-success">
                            Jugar
                        </Button>
                        <div className="vr" />
                        <Button as={Link} to="/2CV13ID5IDP3/preview" variant="outline-info">
                            Previsualizar
                        </Button>
                        <div className="vr" />
                        <Button as={Link} to="/2CV13ID5IDP3/modify" variant="outline-light">
                            Modificar
                        </Button>
                        <div className="vr" />
                        <Button variant="outline-danger">
                            Eliminar
                        </Button>
                    </Stack>
                    </Col>
                    
                </Row>

            </Container>
        );
    }
}

export default Acciones;