import {
  PRODUCT_ACTIVE,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  FLOWERS_PAGE,
  CHANGE_BOUQUET_ACCOUNT,
  CHANGE_FILTER,
  INITIALIZE,
} from '../actionType';

export const addProductActive = (id) => ({
  type: PRODUCT_ACTIVE,
  payload: { id: +id },
});


export const addProduct = (id) => ({
  type: ADD_PRODUCT,
  payload: { id: +id },
});

export const addProductToBasket = (id) => async (dispatch) => {
  const ids = await JSON.parse(localStorage.getItem('basket'));

  if (ids === null) {
    localStorage.setItem('basket', JSON.stringify(id));
  } else {
    localStorage.setItem('basket', JSON.stringify(`${ids},${id}`));
  }
  dispatch(addProduct(id));
};


export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: { id: +id },
});

export const removeProductFromBasket = (id) => async (dispatch) => {
  const got = localStorage.getItem('basket');
  const parsed = JSON.parse(got);
  const ids = parsed.split(',').map(v => +v);
  const result = ids.filter(basketID => basketID !== id);
  localStorage.setItem('basket', JSON.stringify(result.join(',')));
  dispatch(removeProduct(id));
}

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

export const initializeProject = (ids) => ({ type: INITIALIZE, payload: { ids } });

export const initialize = () => (dispatch) => {
  const got = localStorage.getItem('basket');
  const parsed = JSON.parse(got);
  const ids = parsed.split(',').map(v => +v);
  if (ids.length) {
    dispatch(initializeProject(ids));
  }
};
