import {ADD_TO_CART ,GET_FROM_CART} from "../constants/actionType"

export const addToCart = (data)=>  (dispatch)=>{
    dispatch({ type: ADD_TO_CART, payload: data  });
}

export const getFromCart = ()=> (dispatch)=>{
    const data = JSON.parse(localStorage.getItem("orderItems"))
    dispatch({ type: GET_FROM_CART, payload: data  });
}