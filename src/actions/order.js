import {ADD_TO_CART ,GET_FROM_CART,UPDATE_CART , CREATE_ORDER, CLEAR_CART, END_LOADING, START_LOADING} from "../constants/actionType"
import * as api from '../api/index';


export const addToCart = (data)=>  (dispatch)=>{
    dispatch({ type: ADD_TO_CART, payload: data  });
}

export const getFromCart = ()=> (dispatch)=>{
    const data = JSON.parse(localStorage.getItem("orderItems"))
    if (data == null){
        localStorage.setItem("orderItems",JSON.stringify([]))
    }
    dispatch({ type: GET_FROM_CART, payload: data  });
}

export const updateCart = (data)=> (dispatch)=>{
    dispatch({ type: UPDATE_CART, payload: data  });
}

export const createOrder = (order)=> async (dispatch)=>{
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createOrder(order);
        
        dispatch({ type: CREATE_ORDER, payload:data });
        dispatch({ type: CLEAR_CART });
        dispatch({ type: END_LOADING })
        
      } catch (error) {
        console.log(error.message);
      }
}