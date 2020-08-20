import React, { Component } from 'react';
import {
  Button,
  Label,
  Form,
  FormGroup,
  Col,
  Input,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';
import history from '../../containers/App/history';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.state = {
      userInfo: {},
    };
  }

  

  signUp(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const reqBody = JSON.stringify({
      firstName: data.get('name'),
      lastName: data.get('surname'),
      username: data.get('username'),
      password: data.get('password'),
    });
    try {
      fetch('http://localhost:7007/application/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: reqBody,
      }).then(history.push('/'));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="signUp">
        <Container className="signUpContainer">
          <Form onSubmit={this.signUp}>
            <FormGroup>
              <Col sm={8} md={{ size: 6, offset: 4 }}>
                <Label className="headerLabel">Sign Up to</Label>
                <Label className="tripify">Tripify</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="name" className="name" sm={2}>
                Name:
              </Label>
              <Col sm={8} md={{ size: 6, offset: 1 }}>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="naemInputBox"
                  value={this.state.name}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="surname" className="surname" sm={2}>
                Surname:
              </Label>
              <Col sm={8} md={{ size: 6, offset: 1 }}>
                <Input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Surname"
                  className="surnameInputBox"
                  value={this.state.surname}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="username" className="username" sm={2}>
                Username:
              </Label>
              <Col sm={8} md={{ size: 6, offset: 1 }}>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="UsernameInputBox"
                  value={this.state.username}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" className="email" sm={2}>
                E-mail:
              </Label>
              <Col sm={8} md={{ size: 6, offset: 1 }}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail address"
                  className="emailInputBox"
                  value={this.state.email}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" className="password" sm={2}>
                Password:
              </Label>
              <Col sm={8} md={{ size: 6, offset: 1 }}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="passwordInputBox"
                  value={this.state.password}
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Button className="signUpButton">SIGN UP</Button>
            </FormGroup>
            <FormGroup>
              <Link to="/login" className="signUpLink">
                Already have an account?
              </Link>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default SignUpForm;
