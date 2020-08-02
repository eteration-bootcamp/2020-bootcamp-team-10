/**
 *
 * Search
 *
 */
import { Col, Row, Button, Form, FormGroup, Label, Input, ButtonToggle } from 'reactstrap';

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

    const Search = (props) => {
      return (
        <Form>
          <Row form>
            <Col md={3}>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="search">Where do you want to go?</Label>
                <Input type="text" name="search" id="search"/>
              </FormGroup>
            </Col>
            <Col md={3}>
            </Col>
          </Row>
          <Row form>
            <Col md={8}></Col>
            <Col md={2}><ButtonToggle color="primary">Search</ButtonToggle>{' '}</Col>
            <Col md={1}></Col>
          </Row>
          
        </Form>
  );
}

Search.propTypes = {};

export default Search;
