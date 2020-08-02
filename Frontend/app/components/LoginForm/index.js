/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LoginForm() {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
