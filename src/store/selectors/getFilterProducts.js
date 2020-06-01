import getAllItems from '../../utils/getAllItems';
import getHomeItems from '../../utils/getHomeItems';
import getActive from '../../utils/getActive';

export default ({ min, max, category }) => (state) => {
  if (!min && !max && !category) return getHomeItems(state.product.allItems, state.product.bascet);


  const categoryName = category === 'all'
    ? getAllItems(state.product.allItems, state.product.bascet)
    : state.product.allItems[category].map((prod) => ({
      ...prod,
      active: getActive(state.product.bascet, prod.id),
    }));

  const minSale = min || 0;
  const maxSale = max || 100000000;

  const newProdList = categoryName
    .filter((prod) => prod.sale > minSale && prod.sale < maxSale);
  newProdList.sort((a, b) => a.sale - b.sale);
  return newProdList;
};
