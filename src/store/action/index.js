import {
  PRODUCT_ACTIVE,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  FLOVERS_PAGE,
  CHANGE_BOUQET_ACCOUNT,
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
  type: FLOVERS_PAGE,
  payload: { id: +id },
});

export const changeCountBouqet = (id, quantity, sign) => ({
  type: CHANGE_BOUQET_ACCOUNT,
  payload: { id: +id, quantity: +quantity, sign },
});

// filter

export const changeFilterProduct = (minSale, maxSale, category) => ({
  type: CHANGE_FILTER,
  payload: { minSale: +minSale, maxSale: +maxSale, category },
});
