import { FETCH_ALL_COLOR } from "../constants/actionType";

export default (colors = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COLOR:
      return action.payload;
    default:
      return colors;
  }
};
