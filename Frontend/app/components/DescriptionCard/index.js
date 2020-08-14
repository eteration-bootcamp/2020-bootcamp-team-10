/**
 *
 * DescriptionCard
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import OSMap from '../Map';
import PhotoSlider from '../PhotoSlider';
import './style.css';

function DescriptionCard(props) {
  return (
    <div>
      <Card className="cardClass">
        <PhotoSlider />
        <div className="info-container">
          <CardBody>
            <CardTitle className="place-name">
              {JSON.stringify(
                props.aPlaceData.aCulturalPlace.culturalPlaceName,
              )}
            </CardTitle>
            <CardSubtitle className="place-city">
              {JSON.stringify(props.aPlaceData.aCulturalPlace.cityName)}
            </CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText className="place-description">
              {JSON.stringify(props.aPlaceData.aCulturalPlace.cityDescription)}
            </CardText>
          </CardBody>
        </div>
        <OSMap placeInfo={props.aPlaceData.aCulturalPlace} />
      </Card>
    </div>
  );
}

DescriptionCard.propTypes = {
  aPlaceData: PropTypes.object,
};

export default DescriptionCard;
