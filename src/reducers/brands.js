import {
  FETCH_ALL_CATE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionType";

export default (state = { brands: [], isLoading: true }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL_CATE:
      return {...state,brands:action.payload.brands};
    default:
      return state;
  }
};
