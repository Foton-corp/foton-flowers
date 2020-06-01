import getAllItems from '../../utils/getAllItems';

export default (id) => (state) => getAllItems(state.product.allItems, state.product.bascet)
  .find((product) => product.id === +id);
