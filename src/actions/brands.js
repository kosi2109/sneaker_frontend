import {
  FETCH_ALL_CATE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionType";
import * as api from "../api/index";

export const getBrands = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchBrands();

    dispatch({ type: FETCH_ALL_CATE, payload: { brands: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
