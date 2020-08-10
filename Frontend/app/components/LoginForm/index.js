import React from 'react';
import PropTypes from 'prop-types';
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
import './style.css';
import { setAuthentication } from '../../containers/LoginPage/actions';
// import styled from 'styled-components';

export default class LoginForm extends React.Component {
  signIn() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        console.log('success');
       console.log(this.props.setAuth(true), 'isLoggedIn');
        console.log(this.state.isLogin, 'isLogin');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="login">
        <Container className="loginContainer">
          <Form>
            <FormGroup>
              <Col sm={8} md={{ size: 6, offset: 4 }}>
                <Label className="headerLabel">Sign in to</Label>
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
              <Link className="loginLink" to="/sign-up">
                Do not have an account?
              </Link>
            </FormGroup>
            <Button className="loginButton" onClick={this.signIn}>
              LOGIN
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

// LoginForm.propTypes = {
//   setAuth: PropTypes.object,
// };
