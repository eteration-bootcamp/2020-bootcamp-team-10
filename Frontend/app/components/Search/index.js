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
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

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
        responseData = this.props.data.culturalPlaces;
      }
      this.props.setFilterData(responseData);
      return { responseData };
    });
  };

  render() {
    return (
      <div className="search">
        <Container className="searchContainer">
          <Form>
            <Row form>
              <Col md={3} />
              <Col md={6}>
                <FormGroup>
                  <div className="tripify">
                    <Label>Tripify</Label>
                  </div>
                  <Label className="whereDoYou" for="search">
                    Where do you want to go?
                  </Label>
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
            <FormGroup>
              <Row form>
                <Col md={6} />
                <Col md={4}>
                  <ButtonToggle className="button">
                    <Link to="/cultural-place-list">
                      <span className="button-text">Search</span>
                    </Link>
                  </ButtonToggle>
                </Col>
                <Col>
                  {/* {this.state.responseData.map((place, i) => (
                    <div key={i}>
                      <p>
                        {place.culturalPlace}, {place.cityName} {place.cityId}
                      </p>
                    </div>
                  ))} */}
                </Col>
                <Col md={2} />
              </Row>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
Search.propTypes = {
  data: PropTypes.object,
  setFilterData: PropTypes.func,
};
