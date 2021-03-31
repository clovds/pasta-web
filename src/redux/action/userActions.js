import axios from "axios";
import { api_url } from "../../helpers";
import {
  API_USER_FAILED,
  API_USER_START,
  API_USER_SUCCESS,
  LOGIN,
  LOGOUT,
} from "../types";
import { fetchCartAction, nullifyCartAction } from "./cartAction";

const url = api_url + "/users";

export const loginAction = (data) => {
  return async (dispatch) => {
    dispatch({
      type: API_USER_START,
    });
    try {
      const response = await axios.post(`${url}/login`, data);
      const { id, email, token } = response.data;
      localStorage.setItem("token", token);
      dispatch({
        type: LOGIN,
        payload: { id, email },
      });
      dispatch({
        type: API_USER_SUCCESS,
      });
      dispatch(fetchCartAction(id));
    } catch (err) {
      dispatch({
        type: API_USER_FAILED,
        payload: err.message,
      });
    }
  };
};

export const registerAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: API_USER_START });
    try {
      const response = await axios.post(`${url}/register`, data);
      const { id, email, token } = response.data;
      localStorage.setItem("token", token);
      dispatch({
        type: LOGIN,
        payload: { id, email },
      });
      dispatch({
        type: API_USER_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: API_USER_FAILED,
        payload: err.message,
      });
    }
  };
};

export const keepLoginAction = () => {
  return async (dispatch) => {
    dispatch({
      type: API_USER_START,
    });
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(`${url}/keep-login`, {}, headers);
      console.log(response.data);
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
      dispatch({
        type: API_USER_SUCCESS,
      });
      dispatch(fetchCartAction(response.data.id));
    } catch (err) {
      dispatch({
        type: API_USER_FAILED,
        payload: err.message,
      });
    }
  };
};

export const logoutAction = () => {
  return async (dispatch) => {
    dispatch({
      type: API_USER_START,
    });
    try {
      localStorage.removeItem("token");
      dispatch({
        type: LOGOUT,
      });
      dispatch({
        type: API_USER_SUCCESS,
      });
      dispatch(nullifyCartAction());
    } catch (err) {
      dispatch({
        type: API_USER_FAILED,
        payload: err.message,
      });
    }
  };
};
