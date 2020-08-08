import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';
import axios from 'axios';

export default class OSMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placePoint: null,
    };
  }

  setPlacePoint(place) {
    this.setState({ placePoint: place });
  }

  getData = () => {
    const url = 'http://localhost:7007/application/city/1';
    axios.get(url).then(res => {
      const x = res.data;
      this.setState({ culturelData: [x] });
    });
  };

  splitValue(value) {
    if (value !== undefined) {
      let splitStep1 = value.split('[');
      splitStep1 = splitStep1[1].split(']');
      const coordinatesArr = splitStep1[0].split(',');
      return [
        parseFloat(coordinatesArr[1], 10),
        parseFloat(coordinatesArr[0], 10),
      ];
    }
    return [0, 0];
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Map center={[41.0082, 28.9784]} zoom={12}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {this.state.culturelData &&
                this.state.culturelData.map(place => (
                  <Marker
                    key={place.cityId}
                    position={[
                      this.splitValue(place.cityCoordinates)[0],
                      this.splitValue(place.cityCoordinates)[1],
                    ]}
                    onClick={() => {
                      this.setPlacePoint(place);
                    }}
                  />
                ))}

              {this.state.placePoint && (
                <Popup
                  position={[
                    this.splitValue(this.state.placePoint.cityCoordinates)[0],
                    this.splitValue(this.state.placePoint.cityCoordinates)[1],
                  ]}
                  onClose={() => {
                    this.setPlacePoint(null);
                  }}
                >
                  <div>
                    <h2>{this.state.placePoint.culturalPlace}</h2>
                    <p>{this.state.placePoint.cityName}</p>
                  </div>
                </Popup>
              )}
            </Map>
          </Col>
        </Row>
      </Container>
    );
  }
}
