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
import fire from '../../config/fire';
import './style.css';

class SignUpForm extends Component {
  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(u => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="signUp">
        <Container className="signUpContainer">
          <Form>
            <FormGroup>
              <Col sm={8} md={{ size: 6, offset: 4 }}>
                <Label className="headerLabel">Sign up to</Label>
                <Label className="tripify">Tripify</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>
                E-mail:
              </Label>
              <Col sm={8} md={{ size: 6, offset: 1 }}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail address"
                  className="emailInputBox"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>
                Password:
              </Label>
              <Col sm={8} md={{ size: 6, offset: 1 }}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="passwordInputBox"
                />
              </Col>
            </FormGroup>
            <FormGroup>
            <Button className="signUpButton" onClick={this.signUp}>
              SIGN UP
            </Button>
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
