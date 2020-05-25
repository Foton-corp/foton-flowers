/* eslint-disable import/prefer-default-export */
export const getBascetProduct = (state) => {
  console.log('State is: ', state);
  return state.product.bascet;
}
