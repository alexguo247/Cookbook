import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { authService } from "../api/authService";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        name:"",
    };
  }

  async userRegister() {
    const loggedIn = await authService.register(this.state);
    if (loggedIn) {
      localStorage.setItem("token", loggedIn.data.token);
      localStorage.setItem("user", JSON.stringify(loggedIn.data));
      this.props.history.push("/home");
    } 
    else {
      alert("Invalid credentials");
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Cookbook</h1>
                      <p className="text-muted">Register for an account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Full Name"
                          autoComplete="fullname"
                          onChange={(e) => {
                            this.setState({
                              name: e.target.value,
                            });
                          }}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Email"
                          autoComplete="username"
                          onChange={(e) => {
                            this.setState({
                              email: e.target.value,
                            });
                          }}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={(e) => {
                            this.setState({
                              password: e.target.value,
                            });
                          }}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={() => {
                              this.userRegister();
                            }}
                          >
                            Register
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;

