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
import PropTypes from 'prop-types';
import Background from '../../images/icon-512x512.png';
// import PropTypes from 'prop-types';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: [],
    };
  }

  handleInputChange = event => {
    this.setState(
      {
        // eslint-disable-next-line react/no-unused-state
        query: event.target.value,
      },
      () => {
        this.filterArray();
      },
    );
  };

  filterArray = () => {
    this.setState(prevState => {
      const searchString = prevState.query;
      const serviceResponse = this.props.data.culturalPlaces;
      let responseData;
      if (searchString.length > 1) {
        responseData = serviceResponse.filter(place =>
          place.culturalPlace
            .toLowerCase()
            .includes(searchString.toLowerCase()),
        );
      } else {
        responseData = [];
      }
      this.props.setFilterData(responseData);
      return { responseData };
    });
  };

  render() {
    console.log(this.props);
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
            <ButtonToggle>
              <Link to="/cultural-place-list">Search</Link>
            </ButtonToggle>
          </Col>
          <Col>
            {this.state.responseData.map((place, i) => (
              <div key={i}>
                <p>
                  {place.culturalPlace}, {place.cityName} {place.cityId}
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
Search.propTypes = {
  data: PropTypes.object,
  setFilterData: PropTypes.func,
};