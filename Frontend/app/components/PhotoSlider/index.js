/**
 *
 * PhotoSlider
 *
 */

import React, { memo} from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';
import PropTypes from 'prop-types';

function PhotoSlider(props) {
  return (
    <div className="containerSlider">
      <Carousel>
        <Carousel.Item className="itemPhoto">
          <img
            className="imageSlider"
            src={props.placeData[0].cityPhoto1}
            alt="First slide"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item className="itemPhoto">
          <img
            className="imageSlider"
            src={props.placeData[0].cityPhoto2}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item className="itemPhoto">
          <img
            className="imageSlider"
            src={props.placeData[0].cityPhoto3}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

PhotoSlider.propTypes = {
  placeData: PropTypes.array,
};

export default memo(PhotoSlider);
