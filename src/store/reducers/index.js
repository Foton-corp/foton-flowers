import { combineReducers } from 'redux';

import productItems from './productsItem';

const rootReducers = combineReducers({
  product: productItems,
});

export default rootReducers;
