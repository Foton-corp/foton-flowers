import getActive from './getActive';

export default (allItems, bascet) => Object.values(allItems)
  .reduce((accumData, products) => [
    ...accumData,
    ...products.slice(0, 4).map((prod) => ({
      ...prod,
      active: getActive(bascet, prod.id),
    })),
  ], []);
