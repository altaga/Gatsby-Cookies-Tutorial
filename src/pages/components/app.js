import * as React from "react"
import { withCookies } from 'react-cookie';
import Gastby from "./gastby";
import { Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"

class App extends React.Component {
    constructor(props) {
        super(props)
        const { cookies } = this.props;
        this.state = {
            mydata1: cookies.get('text1'),
            mydata2: "Este dato no se va a Guardar:"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeN = this.handleChangeN.bind(this);
    }

    handleChange(event) {
        const temp = event.target.value
        const { cookies } = this.props;
        cookies.set('text1', temp, { path: '/' });
        this.setState({
            mydata1: event.target.value,
        });
    }

    handleChangeN(event) {
        const temp = event.target.value
        this.setState({
            mydata2: event.target.value,
        });
    }

    render() {
        return (
            <Row md="3">
                <Col xs="6">
                    <Gastby />
                </Col>
                <Col xs="4" style={{ paddingTop: "7%" }}>
                    <Card>
                        <Form style={{ marginLeft: "5%", marginRight: "5%", fontSize: "2rem" }}>
                            <FormGroup>
                                <Label for="exampleText">Cookie Area</Label>
                                <Input type="textarea" onChange={this.handleChange} value={this.state.mydata1} />
                                <Label for="exampleText">No Cookie Area</Label>
                                <Input type="textarea" onChange={this.handleChangeN} value={this.state.mydata2} />
                            </FormGroup>
                        </Form>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default withCookies(App);
