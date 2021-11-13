import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

class PunterosDefault extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Defaults: [1,2,3,4,5,6],
            Selected: 1,
         }
         this.handlerOnChange = this.handlerOnChange.bind(this);
    }
    componentDidMount() {
        this.setState({
            Selected: this.state.Defaults[0],
        });
    }
    handlerOnChange(event) {
        this.setState({
            Selected: event.target.value,
        });
    }
    render() { 
        return (
            <Form.Group>
                <Row>
                <Col md={7}>
            <FloatingLabel controlId="LabelPunteros" label={"Elige un "+this.props.tipo}>
                <Form.Select value={this.state.Selected} onChange={this.handlerOnChange} name={this.props.tipo+"Default"}>
                    {this.state.Defaults.map(
                        (item,index)=>{
                            return <option key={index} value={item}>{item}</option>
                        }
                    )}
                </Form.Select>
            </FloatingLabel>
            </Col>
            <Col md={2}>
            <h1>{this.state.Selected}</h1>
            </Col>
            </Row>
            </Form.Group>
         );
    }
}
 
export default PunterosDefault;