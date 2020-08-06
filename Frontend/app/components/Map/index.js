import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as histPlaces from '../../data/historical-places.json';
import './Map.css';
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

        {histPlaces.features.map(place => (
          <Marker
            key={place.properties.PLACE_ID}
            position={[
              place.properties.coordinates[1],
              place.properties.coordinates[0],
            ]}
            onClick={() => {
              this.setPlacePoint(place);
            }}
          />
        ))}

        {this.state.placePoint && (
          <Popup
            position={[
              this.state.placePoint.properties.coordinates[1],
              this.state.placePoint.properties.coordinates[0],
            ]}
            onClose={() => {
              this.setPlacePoint(null);
            }}
          >
            <div>
              <h2>{this.state.placePoint.properties.NAME}</h2>
              <p>{this.state.placePoint.properties.ADDRESS}</p>
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
