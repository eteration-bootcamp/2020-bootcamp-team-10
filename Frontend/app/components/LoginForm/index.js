import React from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import fire from '../../config/fire';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

class LoginForm extends React.Component {
  signIn() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup row>
            <Label for="email" sm={12}>
              E-mail
            </Label>
            <Col sm={12} md={{ size: 4, offset: 4 }}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail address"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={12}>
              Password
            </Label>
            <Col sm={12} md={{ size: 4, offset: 4 }}>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Link to="/sign-up">Do not have an account?</Link>
          </FormGroup>
          <Button color="primary" onClick={this.signIn}>
            LOGIN
          </Button>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;
