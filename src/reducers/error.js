import {ERROR} from "../constants/actionType"


export default (error=null,action)=>{
    switch(action.type){
        case ERROR:
            return action.payload
        default:
            return error
    }
}