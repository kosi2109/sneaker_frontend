import {FETCH_ALL_CATE} from "../constants/actionType"

export default (brands=[],action)=>{
    switch(action.type){
        case FETCH_ALL_CATE:
            return action.payload
        default:
            return brands
    }
}
