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
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{this.props.placeListData.name}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card s content.
          </CardText>
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
