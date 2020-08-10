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
function DescriptionCard(props) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.data.culturalPlace.culturalPlace}</CardTitle>
          <CardSubtitle>{props.data.culturalPlace.cityName}</CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText>{props.data.culturalPlace.cityDescription}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
          <OSMap placeInfo={props.data.culturalPlace} />
        </CardBody>
      </Card>
    </div>
  );
}

DescriptionCard.propTypes = {
  data: PropTypes.object,
};

export default DescriptionCard;
