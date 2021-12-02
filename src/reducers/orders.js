import {
  START_LOADING,
  END_LOADING,
  CREATE_ORDER,
  GET_ORDERS,
  SUCCESS,
  COMPLETE,
} from "../constants/actionType";

export default (
  state = { orders: [], isLoading: false, success: false },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case SUCCESS:
      return { ...state, success: true };
    case COMPLETE:
      return { ...state, success: false };
    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };
    case GET_ORDERS:
      return { ...state, orders: action.payload.orders };
    default:
      return state;
  }
};
