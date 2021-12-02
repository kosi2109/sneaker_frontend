import { AUTH, GET_USER_DATA, LOGOUT } from "../constants/actionType";

export default (state = { authData: null, logged: false }, action) => {
  switch (action.type) {
    case AUTH:
      if (!action.payload.data.error) {
        if (action.payload.data.result) {
          localStorage.setItem(
            "profile",
            JSON.stringify({ ...action?.payload.data.result })
          );
        }
        return { ...state, authData: action?.payload.data, logged: true };
      }
      return { ...state, error: action?.payload.data.error };
    case GET_USER_DATA:
      return { ...state, authData: action?.payload.data };
    case LOGOUT:
      localStorage.removeItem("profile");
      state = { logged: false, authData: null };
      return state;
    default:
      return state;
  }
};
