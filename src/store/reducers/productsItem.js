import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHANGE_BOUQET_ACCOUNT,
  CHANGE_FILTER,
} from '../actionType';

import mockProducts from '../../mocks/products';


const initialState = {
  allItems: mockProducts,
  bascet: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const searchProduct = Object.values(state.allItems)
        .reduce((accumData, products) => [
          ...accumData,
          ...products,
        ], []);
      const findProduct = searchProduct.find((prod) => prod.id === action.payload.id);
      return { ...state, bascet: [...state.bascet, findProduct] };
    }
    case REMOVE_PRODUCT: {
      const removeProduct = state.bascet.filter((item) => item.id !== action.payload.id);
      return { ...state, items: removeProduct, bascet: removeProduct };
    }
    case CHANGE_BOUQET_ACCOUNT: {
      const { quantity, sign, id } = action.payload;
      const newQuantity = sign === '+' ? quantity + 1 : quantity - 1;
      const validatedQuantity = newQuantity < 1 ? 1 : newQuantity;

      const decreaseBouqetAccount = state.bascet.map((prod) => ({
        ...prod,
        quantity: id !== prod.id
          ? prod.quantity
          : validatedQuantity,
      }));
      return { ...state, bascet: [...decreaseBouqetAccount] };
    }
    case CHANGE_FILTER: {
      const { category } = action.payload;
      const categoryName = category === 'all'
        ? Object.values(state.fullProducts)
          .reduce((accumData, products) => [...accumData, ...products], [])
        : state.fullProducts[category];

      const minSale = action.payload.minSale || 0;
      const maxSale = action.payload.maxSale || 100000000;

      const newProdList = categoryName
        .filter((prod) => prod.sale > minSale && prod.sale < maxSale);
      newProdList.sort((a, b) => a.sale - b.sale);
      return { ...state, filtred: newProdList };
    }
    default: return state;
  }
};
