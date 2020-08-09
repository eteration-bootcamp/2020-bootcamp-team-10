/**
 *
 * SmallInfoCard
 *
 */
import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// eslint-disable-next-line react/prefer-stateless-function
class SmallInfoCard extends React.Component {
  render() {
    return (
      <Card>
        <CardImg
          top
          width="100%"
          src={this.props.placeListData.cityPhoto}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{this.props.placeListData.culturalPlace}</CardTitle>
          <CardSubtitle>{this.props.placeListData.cityName}</CardSubtitle>
          <CardText>{this.props.placeListData.cityDescription}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    );
  }
}

SmallInfoCard.propTypes = {
  placeListData: PropTypes.object,
};

export default SmallInfoCard;
