/**
 *
 * DescriptionCard
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import OSMap from '../Map';
import PhotoSlider from '../PhotoSlider';
import './style.css';

function DescriptionCard(props) {
  return (
    <div>
      <Card className="cardClass">
        <PhotoSlider placeData={[props.aPlaceData.aCulturalPlace]} />
        <div className="info-container">
          <CardBody>
            <CardTitle className="place-name">
              {props.aPlaceData.aCulturalPlace.culturalPlace}
            </CardTitle>
            <CardSubtitle className="place-city">
              {props.aPlaceData.aCulturalPlace.cityName}
            </CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText className="place-description">
              {props.aPlaceData.aCulturalPlace.cityDescription}
            </CardText>
          </CardBody>
        </div>
        <div>
          <OSMap placeInfo={[props.aPlaceData.aCulturalPlace]} />
        </div>
      </Card>
    </div>
  );
}

DescriptionCard.propTypes = {
  aPlaceData: PropTypes.object,
};

export default DescriptionCard;
