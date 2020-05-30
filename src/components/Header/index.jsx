import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

import carouselImg1 from '../../assets/images/4.jpg';
import carouselImg2 from '../../assets/images/5.jpg';

const HeaderCarousel = () => {
  const items = [
    {
      img: carouselImg1,
      id: 1,
    },
    {

      img: carouselImg2,
      id: 2,
    },
  ];

  return (
    <Carousel>
      {
                items.map((item) => <Item img={item.img} key={item.id} />)
            }
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper style={{ border: 'none', boxShadow: 'none' }} key={props.id} >
      <img src={props.img} alt="west" width="100%" height="100%" />
    </Paper>
  );
}

export default HeaderCarousel;
