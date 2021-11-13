import {
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_PRODUCTS_BRAND,
  FETCH_FEATURE_PRODUCT,
  START_LOADING,
  END_LOADING
} from "../constants/actionType";

export default (state = {products: [],isLoading: true}, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };

    case FETCH_ALL_PRODUCTS:
      return {...state,products:action.payload.products};

    case FETCH_ALL_PRODUCTS_BRAND:
      return {...state,products:action.payload.products};

    case FETCH_FEATURE_PRODUCT:
      return {...state,products:action.payload.products};

    default:
      return state;
  }
};
