import axios from "axios";
import { api_url } from "../../helpers";
import { API_FETCH_CART, API_FETCH_FAILED, NULLIFY_CART } from "../types";

export const addCartAction = ({
  userID,
  productID,
  qty,
  productName,
  productPrice,
}) => {
  return async (dispatch) => {
    try {
      await axios.post(`${api_url}/cart/add`, {
        userID,
        productID,
        qty,
        productName,
        productPrice,
      });
      dispatch(fetchCartAction(userID));
    } catch (err) {
      console.log(err);
      dispatch({ type: API_FETCH_FAILED, payload: err.message });
    }
  };
};

export const fetchCartAction = (userID) => {
  return async (dispatch) => {
    console.log(userID);
    try {
      const response = await axios.get(`${api_url}/cart/${userID}`);
      dispatch({ type: API_FETCH_CART, payload: response.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: API_FETCH_FAILED, payload: err.message });
    }
  };
};

export const deleteCartAction = (cartID, userID) => {
  return async (dispatch) => {
    console.log(cartID, userID);
    try {
      await axios.post(`${api_url}/cart/delete`, { cartID });
      dispatch(fetchCartAction(userID));
    } catch (err) {
      console.log(err);
      dispatch({ type: API_FETCH_FAILED, payload: err.message });
    }
  };
};

export const nullifyCartAction = () => {
  return (dispatch) => {
    dispatch({ type: NULLIFY_CART });
  };
};

export const checkoutAction = (userID) => {
  return async (dispatch) => {
    console.log(userID);
    try {
      await axios.post(`${api_url}/cart/checkout`, { userID });
      dispatch(fetchCartAction(userID));
    } catch (err) {
      console.log(err);
      dispatch({ type: API_FETCH_FAILED, payload: err.message });
    }
  };
};
