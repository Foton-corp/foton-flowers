import {
  PRODUCT_ACTIVE,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  FLOWERS_PAGE,
  CHANGE_BOUQUET_ACCOUNT,
  // filter
  CHANGE_FILTER,
} from '../actionType';

export const addProductActive = (id) => ({
  type: PRODUCT_ACTIVE,
  payload: { id: +id },
});


export const addProduct = (id) => ({
  type: ADD_PRODUCT,
  payload: { id: +id },
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: { id: +id },
});

export const goToFloversPage = (id) => ({
  type: FLOWERS_PAGE,
  payload: { id: +id },
});

export const changeCountBouqet = (id, quantity, sign) => ({
  type: CHANGE_BOUQUET_ACCOUNT,
  payload: { id: +id, quantity: +quantity, sign },
});

// filter

export const changeFilterProduct = (minSale, maxSale, category) => ({
  type: CHANGE_FILTER,
  payload: { minSale: +minSale, maxSale: +maxSale, category },
});
