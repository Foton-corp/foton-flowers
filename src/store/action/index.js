import {
  PRODUCT_ACTIVE,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  FLOVERS_PAGE,
  INCREASE_COUNT_BOUQUET,
  DECREASE_BOUQET_ACCOUNT,
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

export const increaseCountBouqet = (id, quantity) => ({
  type: INCREASE_COUNT_BOUQUET,
  payload: { id: +id, quantity: +quantity },
});

export const decreaseBouqetAccount = (id, quantity) => ({
  type: DECREASE_BOUQET_ACCOUNT,
  payload: { id: +id, quantity: +quantity },
});
