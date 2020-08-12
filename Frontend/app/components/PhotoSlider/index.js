/**
 *
 * PhotoSlider
 *
 */

import React, { memo, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './style.css';
// import photoData from './photos.json';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
const items = [
  {
    src: 'https://www.trthaber.com/resimler/1276000/1276094.jpg',
    alt: 'kapalı çarşı',
  },
  {
    src: 'https://halktv.com.tr/d/news/73387.jpg',
    alt: 'galata kulesi',
  },
  {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Galata_Tower_at_night.jpg/2560px-Galata_Tower_at_night.jpg',
    alt: 'a',
  },
];

function PhotoSlider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img className="imageSlider" src={item.src} alt={item.altText} />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <div className="containerSlider">
      <Carousel
        className="insideSlider"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          className="itemPhoto"
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

PhotoSlider.propTypes = {};

export default memo(PhotoSlider);
