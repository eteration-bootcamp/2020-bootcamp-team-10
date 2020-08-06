/**
 *
 * Search
 *
 */
import Background from '../../images/icon-512x512.png';
import './index.css'

import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonToggle,
} from 'reactstrap';

import React from 'react';
import * as histPlaces from '../../data/historical-places.json';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
export default class Search extends React.Component {
  state = {
    query: '',
    data: [],
    responseData: [],
  };

  handleInputChange = event => {
    this.setState(
      {
        query: event.target.value,
      },
      () => {
        this.filterArray();
      },
    );
  };

  getData = () => {
    const placeData = histPlaces.features;
    const placeDataList = placeData.map(place => ({
      place_id: place.properties.PLACE_ID,
      name: place.properties.NAME.toLowerCase(),
      city: place.properties.CITY,
    }));
    this.setState({
      data: placeDataList,
    });
  };

  filterArray = () => {
    const searchString = this.state.query;
    let responseData = this.state.data;

    if (searchString.length > 0) {
      responseData = responseData.filter(place =>
        place.name.includes(searchString.toLowerCase()),
      );
    } else {
      responseData = [];
    }
    this.setState({
      responseData,
    });
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <Form className="padding">
        <Row form>
          <Col md={3} />
          <Col md={6} >
            <FormGroup style={{backgroundImage: "url(" + Background + ")", }}>
              <Label for="search">Where do you want to go?</Label>
              <Input
                type="text"
                name="search"
                id="search"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={3} />
        </Row>
        <Row form>
          <Col md={8} />
          <Col md={2}>
            <ButtonToggle color="primary">Search</ButtonToggle>{' '}
          </Col>
          <Col>
            {this.state.responseData.map((place, i) => (
              <div key={i}>
                <p>
                  {place.name}, {place.city}
                </p>
              </div>
            ))}
          </Col>
          <Col md={1} />
        </Row>
      </Form>
    );
  }
}
