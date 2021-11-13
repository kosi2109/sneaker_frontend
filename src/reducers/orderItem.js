import { ADD_TO_CART } from "../constants/actionType"
var items = []
items = JSON.parse(localStorage.getItem("orderItems"))
export default (orderItems=items ,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            
            function isExist(item){
                return action.payload.name == item.name
            }
            
            if (orderItems != null){
                const item = orderItems.find(isExist)
                if (item){
                    item.quantity += 1
                    orderItems = [...orderItems]
                }else{
                    orderItems.push(action.payload)
                }
                
            }else{
                orderItems = [action.payload]
            }
            
            localStorage.setItem("orderItems",JSON.stringify(orderItems))
            
            return orderItems

        default:
            return orderItems;
    }
}