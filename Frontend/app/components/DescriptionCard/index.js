/**
 *
 * DescriptionCard
 *
 */
import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import OSMap from '../Map';
import PhotoSlider from '../PhotoSlider';
import './style.css';

function DescriptionCard(props) {
  return (
    <div>
      <Card className="cardClass">
      {console.log('---->',props.aPlaceData.aCulturalPlace.cityId,'------>City Id')}
        <PhotoSlider />
        <div className="info-container">
          {
            console.log('---->',props.aPlaceData.aCulturalPlace.cityId,'City Id')
          }
          <CardBody>
            <CardTitle className="place-name">
              {JSON.stringify(props.aPlaceData.aCulturalPlace.culturalPlaceName)}
            </CardTitle>
            <CardSubtitle className="place-city">
              {JSON.stringify(props.aPlaceData.aCulturalPlace.cityName)}
            </CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText className="place-description">
              {JSON.stringify(props.aPlaceData.aCulturalPlace.cityDescription)}
            </CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </div>
        <OSMap placeInfo={props.aPlaceData.aCulturalPlace} />
        {console.log('---->',props.aPlaceData.aCulturalPlace.cityId,'------>City Id2')}
      </Card>
    </div>
    
  );
}

DescriptionCard.propTypes = {
  data: PropTypes.object,
};

export default DescriptionCard;
