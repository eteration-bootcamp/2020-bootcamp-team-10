import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(`A email was submitted: ${this.state.email}`);
    console.log(`A password was submitted: ${this.state.password}`);

    event.preventDefault();
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            placeholder="something@idk.cool"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            placeholder="don't tell!"
          />
        </FormGroup>
        <FormGroup>
          <Input type="submit" value="Login" />
        </FormGroup>
      </Form>
    );
  }
}

LoginForm.propTypes = {};

export default LoginForm;
