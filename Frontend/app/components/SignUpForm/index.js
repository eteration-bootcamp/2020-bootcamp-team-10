/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      number:'',
      bday:'',
      sub: false,
      check: false
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }

  handleSubmit(event) {
    console.log('A email was submitted: ' + this.state.email);
    console.log('A password was submitted: ' + this.state.password);
    console.log('A number was submitted: ' + this.state.number);
    console.log('A birthday was submitted: ' + this.state.bday);
    event.preventDefault();
  }
  render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="text">Please fill up the form to sign up!</Label>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Please enter your email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Please enter a password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="number">Number</Label>
            <Input
              type="number"
              name="number"
              id="number"
              placeholder="Please enter your phone number"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="bday">Birthday</Label>
            <Input
              type="date"
              name="bday"
              id="bday"
              placeholder="Please enter your Birthday"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="file">Profile Picture</Label>
            <Input type="file" name="file" id="picture" />
            <FormText color="muted">
              This will be your profile picture.
            </FormText>
          </FormGroup>
          <FormGroup>
          <Input type="submit" value="Sign Up"/>
          </FormGroup>
        </Form>
    );
  }
}

SignUpForm.propTypes = {};

export default SignUpForm;
