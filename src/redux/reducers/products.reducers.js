import { productConstants } from "../constants";

const initialState = {};

const products = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        response: action.payload
      };

    default:
      return state
  }

}

export { products }