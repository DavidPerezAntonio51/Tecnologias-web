import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


class Acciones extends Component {
    constructor(props) {
        super(props);
        this.handlerEliminar = this.handlerEliminar.bind(this);
    }
    handlerEliminar(e){
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            background: '#B3B3B3',
            icon: 'warning',
            iconColor: '#000000',
            title: '¡Cuidado!',
            text: 'Deseas Eliminar la pregunta con ID: '+ this.props.pregunta,
        });
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                    <Stack direction="horizontal" gap={3}>
                        <Button as={Link} to={"/2CV13ID5IDP3/play"+"?pregunta="+this.props.pregunta} variant="outline-success">
                            Jugar
                        </Button>
                        <div className="vr" />
                        <Button as={Link} to={"/2CV13ID5IDP3/preview"+"?pregunta="+this.props.pregunta} variant="outline-info">
                            Previsualizar
                        </Button>
                        <div className="vr" />
                        <Button as={Link} to={"/2CV13ID5IDP3/modify"+"?pregunta="+this.props.pregunta} variant="outline-light">
                            Modificar
                        </Button>
                        <div className="vr" />
                        <Button variant="outline-danger" onClick={this.handlerEliminar}>
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