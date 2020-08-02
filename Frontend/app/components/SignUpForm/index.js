/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SignUpForm() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="sign-up-text">Please fill up the form to sign up!</Label>
        </FormGroup>
        <FormGroup>
          <Label for="sign-up-email">Email</Label>
          <Input
            type="email"
            name="email"
            id="sign-up-email"
            placeholder="Please enter your email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="sign-up-password">Password</Label>
          <Input
            type="password"
            name="password"
            id="sign-up-password"
            placeholder="Please enter a password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="sign-up-number">Number</Label>
          <Input
            type="number"
            name="number"
            id="sign-up-number"
            placeholder="Please enter your phone number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="sign-up-bday">Birthday</Label>
          <Input
            type="date"
            name="bday"
            id="sign-up-bday"
            placeholder="Please enter your B"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Profile Picture</Label>
          <Input type="file" name="file" id="sign-up-picture" />
          <FormText color="muted">
            This will be your profile picture.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Subscribe for our latest smt smt
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> I gave you my correct data
          </Label>
        </FormGroup>
      </Form>
      <Button>Sign Up</Button>
    </div>
  );
}

SignUpForm.propTypes = {};

export default SignUpForm;
