import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import carouselImg1 from '../../assets/images/4.jpg';
import carouselImg2 from '../../assets/images/5.jpg';

const HeaderCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carouselImg1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carouselImg1}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carouselImg2}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);

export default HeaderCarousel;
