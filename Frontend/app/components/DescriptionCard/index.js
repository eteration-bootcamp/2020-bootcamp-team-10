/**
 *
 * DescriptionCard
 *
 */

import React from 'react';
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
        <PhotoSlider />
        <div className="info-container">
        <CardBody>
          <CardTitle className="place-name">
            {props.data.culturalPlace.culturalPlace}
          </CardTitle>
          <CardSubtitle className="place-city">
            {props.data.culturalPlace.cityName}
          </CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText className="place-description">
            {props.data.culturalPlace.cityDescription}
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
        </div>
        <OSMap placeInfo={props.data.culturalPlace} />
      </Card>
    </div>
  );
}

DescriptionCard.propTypes = {
  data: PropTypes.object,
};

export default DescriptionCard;
