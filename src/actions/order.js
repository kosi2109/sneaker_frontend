import {
  ADD_TO_CART,
  GET_ORDERS,
  COMPLETE,
  SUCCESS,
  GET_FROM_CART,
  UPDATE_CART,
  CREATE_ORDER,
  CLEAR_CART,
  END_LOADING,
  START_LOADING,
  GET_ORDER,
} from "../constants/actionType";
import * as api from "../api/index";

export const addToCart = (data) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: data });
};

export const getFromCart = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem("orderItems"));
  if (data == null) {
    localStorage.setItem("orderItems", JSON.stringify([]));
  }
  dispatch({ type: GET_FROM_CART, payload: data });
};

export const updateCart = (data) => (dispatch) => {
  dispatch({ type: UPDATE_CART, payload: data });
};

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createOrder(order);
    dispatch({ type: END_LOADING });
    dispatch({ type: SUCCESS });
    dispatch({ type: CLEAR_CART });
    dispatch({ type: CREATE_ORDER, payload: data });
    setTimeout(() => dispatch({ type: COMPLETE }), 1000);
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrders = (userId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getOrders(userId);

    dispatch({ type: GET_ORDERS, payload: { orders: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getOrder(id);
    dispatch({ type: GET_ORDER, payload: { orders: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
