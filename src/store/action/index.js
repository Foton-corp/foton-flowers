import {
  PRODUCT_ACTIVE, ADD_PRODUCT, REMOVE_PRODUCT, FLOVERS_PAGE, QUANTITY_PRODUCT, TOTAL_PRODUCTS,
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

export const changeQuantity = (id, quantity) => ({
  type: QUANTITY_PRODUCT,
  payload: { id: +id, quantity },
});
