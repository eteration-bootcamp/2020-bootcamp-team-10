/**
 *
 * Search
 *
 */
import './index.css';

import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonToggle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import React from 'react';
// import * as histPlaces from '../../data/historical-places.json';
import axios from 'axios';
import Background from '../../images/icon-512x512.png';
import CulturalPlaceList from '../CulturalPlaceList';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      responseData: [],
      historicalPlacesDataFromDb: [],
    };
  }

  componentDidMount() {
    this.getData();
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
    const url = 'http://localhost:7007/application/city/list';
    axios
      .get(url)
      .then(res => {
        const culturalPlacesResponse = res.data;
        this.setState({ culturalPlaces: culturalPlacesResponse });
      })
      .then(() => {
        this.setState(prevstate => {
          const placeDataList = prevstate.culturalPlaces.map(place => ({
            place_id: place.cityId,
            name: place.culturalPlace.toLowerCase(),
            city: place.cityName,
          }));
          return { data: placeDataList };
        });
      });
  };

  filterArray = () => {
    this.setState(prevState => {
      const searchString = prevState.query;
      let responseData = prevState.data;
      if (searchString.length > 1) {
        responseData = responseData.filter(place =>
          place.name.includes(searchString.toLowerCase()),
        );
      } else {
        responseData = [];
      }
      return { responseData };
    });
  };

  onClickSearch(culturalData) {
    // const culturalData = data;
    console.log(culturalData, 'Cultural Data Debug');
    if (culturalData !== undefined) {
      return <CulturalPlaceList fiteredPlaceList={culturalData} />;
    }
    else if (culturalData !== []){
    <CulturalPlaceList noFoundMessage= 'No place was found.' />;
  }
  else {<CulturalPlaceList undefineMessage= 'Undefined dataflow.' />;}
  }

 

  render() {
    return (
      <Form className="padding">
        <Row form>
          <Col md={3} />
          <Col md={6}>
            <FormGroup style={{ backgroundImage: `url(${Background})` }}>
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
            <ButtonToggle
              onClick={() => this.onClickSearch(this.state.culturalPlaces)}
            >
              <Link to="/cultural-place-list" >Search</Link>
            </ButtonToggle>
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
