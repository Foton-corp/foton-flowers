import { combineReducers } from 'redux';

import productItems from './productsItem';
import languageReducer from './language-reducer';

const rootReducers = combineReducers({
  product: productItems,
  language: languageReducer,
});

export default rootReducers;
