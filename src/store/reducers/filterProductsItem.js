// import { CHANGE_FILTER } from '../actionType';

// import mockProducts from '../../mocks/products';

// const initialState = {
//   fullProducts: mockProducts,
//   filtred: [],
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     // case CHANGE_FILTER: {
//     //   const { category } = action.payload;
//     //   const categoryName = category === 'all'
//     //     ? Object.values(state.fullProducts)
//     //       .reduce((accumData, products) => [...accumData, ...products], [])
//     //     : state.fullProducts[category];

//     //   const minSale = action.payload.minSale || 0;
//     //   const maxSale = action.payload.maxSale || 100000000;

//     //   const newProdList = categoryName
//     //     .filter((prod) => prod.sale > minSale && prod.sale < maxSale);
//     //   newProdList.sort((a, b) => a.sale - b.sale);
//     //   return { ...state, filtred: newProdList };
//     // }
//     default: return state;
//   }
// };
