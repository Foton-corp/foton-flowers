/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
import { nanoid } from 'nanoid';

import {
  ADD_PRODUCT, PRODUCT_ACTIVE, REMOVE_PRODUCT, FLOVERS_PAGE,
} from '../actionType';

// product image
import rosi from '../../assets/images/1.jpg';
import lili from '../../assets/images/2.jpg';

const initialState = {
  items: [
    {
      name: 'Պիոն',
      sale: 1000,
      id: nanoid(),
      img: rosi,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
    },
    {
      name: 'Պիոն',
      sale: 3000,
      id: nanoid(),
      img: lili,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
    },
    {
      name: 'Պիոն',
      sale: 3000,
      id: nanoid(),
      img: rosi,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
    },
    {
      name: 'Պիոն',
      sale: 9000,
      id: nanoid(),
      img: lili,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
    },
    {
      name: 'Պիոն',
      sale: 6000,
      id: nanoid(),
      img: rosi,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
    },
    {
      name: 'Պիոն',
      sale: 2000,
      id: nanoid(),
      img: lili,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
    },
    {
      name: 'Պիոն',
      sale: 5000,
      id: nanoid(),
      img: lili,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
    },
    {
      name: 'Պիոն',
      sale: 8000,
      id: nanoid(),
      img: lili,
      about: `Orchids are widely considered to be the most
       highly evolved of all flowering plants. ... Technically,
        an orchid is a flowering plant that exhibits a unique reproductive strategy. 
        All orchids have both the male and female
       reproductive structures fused into a single structure commonly called a "column".`,
    },
  ],
  bascet: [

  ],
  floverPage: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const searchProduct = state.items.find((prod) => prod.id === action.id);
      const newProduct = {
        name: searchProduct.name,
        sale: searchProduct.sale,
        id: searchProduct.id,
        img: searchProduct.img,
      };
      return { items: state.items, bascet: [...state.bascet, newProduct] };
    case PRODUCT_ACTIVE:
      const newProductList = state.items.map((product) => (
        {
          ...product,
          active: product.id === action.id ? !product.active : product.active,
        }
      ));
      return { items: newProductList, bascet: state.bascet };
    case REMOVE_PRODUCT:
      const removeproduct = state.bascet.filter((item) => item.id !== action.id);
      const removeProductActive = state.items.map((product) => (
        {
          ...product,
          active: product.id === action.id ? !product.active : product.active,
        }
      ));
      return { items: removeProductActive, bascet: removeproduct };
    case FLOVERS_PAGE:
      console.log(state, action)
      const searchFlavor = state.items.find((prod) => action.id === prod.id);
      const floverAbout = {
        name: searchFlavor.name,
        sale: searchFlavor.sale,
        id: searchFlavor.id,
        img: searchFlavor.img,
        about: searchFlavor.about,
      };
      return { items: state.items, bascet: state.bascet, floverPage: [floverAbout] };
  }
  return state;
};
