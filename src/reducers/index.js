import { combineReducers } from "redux";

import products from "./products";
import brands from "./brands";
import colors from "./colors";
import sizes from "./sizes";
import orderItems from "./orderItem";
import orders from "./order";
import auth from "./auth";

export const reducers = combineReducers({
  products,
  brands,
  colors,
  sizes,
  orderItems,
  orders,
  auth
});
