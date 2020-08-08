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
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      responseData: [],
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
              <p>
                {place.name}, {place.city}
              </p>
            ))}
          </Col>
          <Col md={1} />
        </Row>
      </Form>
    );
  }
}
