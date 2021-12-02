import {
  ADD_TO_CART,
  GET_FROM_CART,
  UPDATE_CART,
  CLEAR_CART,
} from "../constants/actionType";

export default (orderItems = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      orderItems = JSON.parse(localStorage.getItem("orderItems"));
      function isExist(item) {
        return (
          action.payload.name === item.name &&
          item.color === action.payload.color &&
          item.size === action.payload.size
        );
      }

      if (orderItems != null) {
        const item = orderItems.find(isExist);
        if (item) {
          item.quantity += 1;
          orderItems = [...orderItems];
        } else {
          orderItems = [...orderItems, action.payload];
        }
      } else {
        orderItems = [action.payload];
      }

      localStorage.setItem("orderItems", JSON.stringify(orderItems));

      return orderItems;

    case GET_FROM_CART:
      orderItems = action.payload;

      return orderItems;
    case UPDATE_CART:
      const { index, type } = action.payload;
      orderItems = JSON.parse(localStorage.getItem("orderItems"));

      if (type === "add") {
        orderItems[index].quantity += 1;
      } else if (type === "reduce") {
        orderItems[index].quantity -= 1;
        if (orderItems[index].quantity < 1) {
          orderItems.splice(orderItems[index], 1);
        }
      } else {
        orderItems.splice(orderItems[index], 1);
      }

      localStorage.setItem("orderItems", JSON.stringify(orderItems));
      return orderItems;

    case CLEAR_CART:
      orderItems = [];
      localStorage.setItem("orderItems", JSON.stringify(orderItems));
      return orderItems;

    default:
      return orderItems;
  }
};
