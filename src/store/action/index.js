import {
  ADD_PRODUCT, REMOVE_PRODUCT, ACTIVE_PRODUCT,
} from '../actionType';


export const addProduct = (id) => ({
  type: ADD_PRODUCT,
  id,
});

export const removeBascetProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});

export const addProductActive = (id) => ({
  type: ACTIVE_PRODUCT,
  id,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});
