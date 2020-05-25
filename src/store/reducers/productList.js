import { nanoid } from 'nanoid';

import {
  PRODUCT_ACTIVE, ADD_PRODUCT, REMOVE_PRODUCT,
} from '../actionType';

// product image
import rosi from '../../assets/images/1.jpg';
import lili from '../../assets/images/2.jpg';

const initialState = {
  product: [
    {
      name: 'light guitar',
      sale: 300,
      id: nanoid(),
      img: rosi,
    },
    {
      name: 'light guitar',
      sale: 300,
      id: nanoid(),
      img: lili,
    },
    {
      name: 'light guitar',
      sale: 300,
      id: nanoid(),
      img: rosi,
    },
    {
      name: 'light guitar',
      sale: 300,
      id: nanoid(),
      img: lili,
    },
    {
      name: 'light guitar',
      sale: 300,
      id: nanoid(),
      img: rosi,
    },
    {
      name: 'light guitar',
      sale: 300,
      id: nanoid(),
      img: lili,
    },
  ],
};

export default (state = initialState, action) => state;
