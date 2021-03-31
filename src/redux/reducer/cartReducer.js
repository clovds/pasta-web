import { API_FETCH_CART, API_FETCH_FAILED, NULLIFY_CART } from "../types";

const INITIAL_STATE = {
  cart_list: [],
  error: "",
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_FETCH_CART:
      return {
        ...state,
        cart_list: action.payload,
      };
    case API_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case NULLIFY_CART:
      return {
        INITIAL_STATE,
      };
    default:
      return state;
  }
};
