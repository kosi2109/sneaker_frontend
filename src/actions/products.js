import {
  END_LOADING,
  ERROR,
  FETCH_ALL_PRODUCTS,
  FETCH_FEATURE_PRODUCT,
  START_LOADING,
} from "../constants/actionType";
import * as api from "../api/index";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchProducts();

    dispatch({ type: FETCH_ALL_PRODUCTS, payload: { products: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByBrand = (brand, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchProductsByBrand(brand);
    if (data.error) {
      history("/404", { replace: true });
      dispatch({ type: FETCH_ALL_PRODUCTS, payload: { products: [] } });
    }

    dispatch({ type: FETCH_ALL_PRODUCTS, payload: { products: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getFeatureProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchFeatureProducts();

    dispatch({ type: FETCH_FEATURE_PRODUCT, payload: { products: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
