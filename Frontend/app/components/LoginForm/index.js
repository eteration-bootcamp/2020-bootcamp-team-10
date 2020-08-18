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
import history from '../../containers/App/history';

import './style.css';
import { setAuthentication } from '../../containers/LoginPage/actions';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.state = {
      userInfo: {},
    };
    this.checkLogin = this.checkLogin.bind(this);
    this.redirectToHome = this.redirectToHome.bind(this);
  }

  checkLogin(userInfo) {
    if (userInfo.additionalUserInfo.operationType === 'signIn') {
      this.props.setAuth(true);
    }
  }

  redirectToHome() {
    if (this.props.userInfo.isLoggedIn) {
      history.push('/');
    }
  }

  signIn(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const reqBody = JSON.stringify({
      username: data.get('username'),
      password: data.get('password'),
    });
    try {
      fetch('http://localhost:7007/application/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: reqBody,
      })
        .then(response => response.json())
        .then(data => this.props.setAuth(data))
        .then(data => this.redirectToHome());
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="login">
        <Container className="loginContainer">
          <Form onSubmit={this.signIn}>
            <FormGroup>
              <Col sm={8} md={{ size: 6, offset: 4 }}>
                <Label className="headerLabel">Login to</Label>
                <Label className="tripify">Tripify</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" className="email" sm={2}>
                Username:
              </Label>
              <Col sm={8} md={{ size: 6, offset: 1 }}>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="emailInputBox"
                  value={this.state.username}
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
              <Button className="loginButton">LOGIN</Button>
            </FormGroup>
            <FormGroup>
              <Link className="loginLink" to="/sign-up">
                Do not have an account?
              </Link>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
