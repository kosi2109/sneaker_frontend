import {FETCH_ALL_SIZE} from "../constants/actionType"

export default (sizes=[],action)=>{
    switch(action.type){
        case FETCH_ALL_SIZE:
            return action.payload
        default:
            return sizes
    }
}