export const getInfoForFlavorById = (state, id) => {
  console.log(state.product.items.find(product => product.id === +id));
  return state.product.items.find(product => product.id === +id);
};
