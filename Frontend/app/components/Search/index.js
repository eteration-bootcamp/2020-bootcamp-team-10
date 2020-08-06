/**
 *
 * Search
 *
 */
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
// import * as histPlaces from '../../data/historical-places.json';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      responseData: [],
      historicalPlacesDataFromDb: []
    };
  }


  state = {
    
  };
componentDidMount(){

}
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
    axios.get("http://localhost:7007/application/city/list")
     .then(res => {
      const historicalPlaces = res.data;
      console.log(historicalPlaces, 'hist places');
      this.setState({ historicalPlacesDataFromDb: historicalPlaces });
      console.log(this.state.historicalPlacesDataFromDb, 'placeData1');
    }).then(res =>{ 
      const placeDataList = this.state.historicalPlacesDataFromDb.map(place => ({
      place_id: place.cityId,
      name: place.culturalPlace.toLowerCase(),
      city: place.cityName,
    }));
    console.log(placeDataList, 'placeDatalist')
    this.setState({
      data: placeDataList,
    });
  })
     
  };

  filterArray = () => {
    const searchString = this.state.query;
    let responseData = this.state.data;
    console.log(responseData, 'state responsedata')

    if (searchString.length > 0) {
      responseData = responseData.filter(place =>
        place.name.includes(searchString.toLowerCase()),
      );
      console.log(responseData, 'response dadta')
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
      <Form>
        <Row form>
          <Col md={3} />
          <Col md={6}>
            <FormGroup>
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
