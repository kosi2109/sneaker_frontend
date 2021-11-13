import {ADD_TO_CART} from "../constants/actionType"

export const addToCart = (data)=>  (dispatch)=>{
    dispatch({ type: ADD_TO_CART, payload: data  });
}