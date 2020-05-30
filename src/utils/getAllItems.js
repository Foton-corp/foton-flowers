import getActive from './getActive';

export default (mockProducts, bascet) => Object.values(mockProducts)
  .reduce((accumData, products) => [
    ...accumData,
    ...products.map((prod) => ({
      ...prod,
      active: getActive(bascet, prod.id),
    })),
  ], []);
