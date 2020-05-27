import {
  ADD_PRODUCT,
  PRODUCT_ACTIVE,
  REMOVE_PRODUCT,
  FLOVERS_PAGE,
  INCREASE_COUNT_BOUQUET,
  DECREASE_BOUQET_ACCOUNT,
  PRODUCT_ACTIVE_ABOUT_PAGE,
} from '../actionType';

// product image
import rosi from '../../assets/images/1.jpg';
import lili from '../../assets/images/2.jpg';

const idGenerator = () => {
  let id = 0;
  return () => id++;
};

const generateID = idGenerator();

const initialState = {
  items: [
    {
      name: 'Պիոն',
      sale: 1000,
      id: generateID(),
      img: rosi,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
      quantity: 1,
      active: false,
    },
    {
      name: 'Պիոն',
      sale: 3000,
      id: generateID(),
      img: lili,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
      quantity: 1,
      active: false,
    },
    {
      name: 'Պիոն',
      sale: 3000,
      id: generateID(),
      img: rosi,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
      quantity: 1,
      active: false,
    },
    {
      name: 'Պիոն',
      sale: 9000,
      id: generateID(),
      img: lili,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
      quantity: 1,
    },
    {
      name: 'Պիոն',
      sale: 6000,
      id: generateID(),
      img: rosi,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
      quantity: 1,
      active: false,
    },
    {
      name: 'Պիոն',
      sale: 2000,
      id: generateID(),
      img: lili,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
      quantity: 1,
      active: false,
    },
    {
      name: 'Պիոն',
      sale: 5000,
      id: generateID(),
      img: lili,
      about: `Orchids are widely considered to be the most
      highly evolved of all flowering plants. ... Technically,
       an orchid is a flowering plant that exhibits a unique reproductive strategy. 
       All orchids have both the male and female
      reproductive structures fused into a single structure commonly called a "column".`,
      quantity: 1,
      active: false,
    },
    {
      name: 'Պիոն',
      sale: 8000,
      id: generateID(),
      img: lili,
      about: `Orchids are widely considered to be the most
       highly evolved of all flowering plants. ... Technically,
        an orchid is a flowering plant that exhibits a unique reproductive strategy. 
        All orchids have both the male and female
       reproductive structures fused into a single structure commonly called a "column".`,
      quantity: 1,
      active: false,
    },
  ],
  bascet: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const searchProduct = state.items.find((prod) => prod.id === action.payload.id);
      return { ...state, bascet: [...state.bascet, searchProduct] };
    case PRODUCT_ACTIVE:
      const newProductList = state.items.map((product) => (
        {
          ...product,
          active: product.id === action.payload.id ? !product.active : product.active,
        }
      ));
      return { ...state, items: newProductList };
    case REMOVE_PRODUCT:
      const removeProduct = state.bascet.filter((item) => item.id !== action.payload.id);
      const removeProductActive = state.items.map((product) => (
        {
          ...product,
          active: product.id === action.payload.id ? !product.active : product.active,
        }
      ));
      return { ...state, items: removeProductActive, bascet: removeProduct };
    // case FLOVERS_PAGE:
    //   const searchFlavor = state.items.find((prod) => action.payload.id === prod.id);
    //   return { ...state };
    case INCREASE_COUNT_BOUQUET:
      const increaseCountBouqet = state.bascet.map((prod) => (
        {
          ...prod,
          quantity: action.payload.id === prod.id ? action.payload.quantity + 1 : prod.quantity,
        }
      ));
      return { ...state, bascet: [...increaseCountBouqet] };
    case DECREASE_BOUQET_ACCOUNT:
      const decreaseBouqetAccount = state.bascet.map((prod) => {
        if (action.payload.quantity > 1) {
          return {
            ...prod,
            quantity: action.payload.id === prod.id ? action.payload.quantity - 1 : prod.quantity,
          };
        }
        return { ...prod };
      });
      return { ...state, bascet: [...decreaseBouqetAccount] };
    default:
      return state;
  }
};
