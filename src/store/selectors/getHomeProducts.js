import getHomeItems from '../../utils/getHomeItems';

export default (state) => getHomeItems(state.product.allItems, state.product.bascet);
