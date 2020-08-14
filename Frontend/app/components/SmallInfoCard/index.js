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
  ButtonToggle,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

// import styled from 'styled-components';

// eslint-disable-next-line react/prefer-stateless-function
class SmallInfoCard extends React.Component {
  onClickButton(place) {
    this.props.setFilterData(place);
  }

  render() {
    return (
      <Card className="smallInfoCard">
        <CardImg
          top
          width="100%"
          src={this.props.placeListData.cityPhoto}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="smallInfoCardTitle">
            {this.props.placeListData.culturalPlace}
          </CardTitle>
          <CardSubtitle className="smallInfoCardSubTitle">
            {this.props.placeListData.cityName}
          </CardSubtitle>
          <CardText className="smallInfoCardDescription">
            {this.props.placeListData.cityDescription}
          </CardText>
          <ButtonToggle
            className="cardButton"
            onClick={() => this.onClickButton(this.props.placeListData)}
          >
            <Link to={`/cultural-place/${this.props.placeListData.cityId}`}>
              <span className="button-text">Learn more..</span>
            </Link>
          </ButtonToggle>
        </CardBody>
      </Card>
    );
  }
}

SmallInfoCard.propTypes = {
  placeListData: PropTypes.object,
  setFilterData: PropTypes.func,
};

export default SmallInfoCard;
