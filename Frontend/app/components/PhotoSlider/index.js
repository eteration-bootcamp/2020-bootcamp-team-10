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
  console.log(props, '----->Slider Porps');

  return (
    <div className="containerSlider">
      <Carousel>
        <Carousel.Item className="itemPhoto">
          <img
            className="imageSlider"
            src={props.placeData.cityPhoto1}
            alt="First slide"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item className="itemPhoto">
          <img
            className="imageSlider"
            src={props.placeData.cityPhoto2}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item className="itemPhoto">
          <img
            className="imageSlider"
            src={props.placeData.cityPhoto3}
            alt="Third slide"
          />

          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

PhotoSlider.propTypes = {
  placeData: PropTypes.object,
};

export default memo(PhotoSlider);
