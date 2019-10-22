import products from "../../data/dummy-data";
const initialState = {
  availableProducts: products,
  userProducts: []
};

export default (state = initialState, action) => {
  return state;
};
