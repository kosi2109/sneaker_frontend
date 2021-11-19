import {AUTH} from "../constants/actionType"


export default (state = {authData:null},action)=>{
    switch(action.type){
        case AUTH:
       
            localStorage.setItem('profile', JSON.stringify({...action?.payload.data}))
            return {...state,authData: action?.payload.data}
        default:
            return state
    }
}