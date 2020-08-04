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
import fire from '../../config/fire';

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
          <Button color="primary" onClick={this.signUp}>
            SIGN UP
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignUpForm;
