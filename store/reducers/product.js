import { SET_PRODUCTS } from "../actions/product";

import PRODUCTS from "../../data/dummy-data";
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        availableProducts: action.products
      };
    default:
      return state;
  }
};
