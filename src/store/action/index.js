import {
  PRODUCT_ACTIVE, ADD_PRODUCT, REMOVE_PRODUCT, FLOVERS_PAGE,
} from '../actionType';

export const addProductActive = (id) => ({
  type: PRODUCT_ACTIVE,
  id,
});

export const addProduct = (id) => ({
  type: ADD_PRODUCT,
  id,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});

export const goToFloversPage = (id) => ({
  type: FLOVERS_PAGE,
  id,
});
