import { START_LOADING, END_LOADING, GET_ORDER } from "../constants/actionType";

export default (state = { order: null, isLoading: true }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case GET_ORDER:
      return { ...state, order: action.payload.orders };
    default:
      return state;
  }
};
