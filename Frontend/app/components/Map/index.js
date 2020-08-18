import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';
import PropTypes from 'prop-types';
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

  coordinateParseFloat(value) {
    if (value !== undefined) {
      return parseFloat(value, 10);
    }
    return 0;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Map
              center={[
                this.coordinateParseFloat(
                  this.props.placeInfo[0].cityCoordinatesX,
                ),
                this.coordinateParseFloat(
                  this.props.placeInfo[0].cityCoordinatesY,
                ),
              ]}
              zoom={15}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />

              <Marker
                key={this.props.placeInfo.cityId}
                position={[
                  this.coordinateParseFloat(
                    this.props.placeInfo[0].cityCoordinatesX,
                  ),
                  this.coordinateParseFloat(
                    this.props.placeInfo[0].cityCoordinatesY,
                  ),
                ]}
                onClick={() => {
                  this.setPlacePoint(this.props.placeInfo[0]);
                }}
              />

              {this.state.placePoint && (
                <Popup
                  position={[
                    this.coordinateParseFloat(
                      this.props.placeInfo[0].cityCoordinatesX,
                    ),
                    this.coordinateParseFloat(
                      this.props.placeInfo[0].cityCoordinatesY,
                    ),
                  ]}
                  onClose={() => {
                    this.setPlacePoint(null);
                  }}
                >
                  <div>
                    <h2>{this.props.placeInfo[0].culturalPlace}</h2>
                    <p>{this.props.placeInfo[0].cityName}</p>
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
OSMap.propTypes = {
  placeInfo: PropTypes.object.isRequired,
};
