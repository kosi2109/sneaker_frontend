import {AUTH} from "../constants/actionType"


export default (state = {authData:null},action)=>{
    switch(action.type){
        case AUTH:
            if(!action.payload.data.error){
                localStorage.setItem('profile', JSON.stringify({...action?.payload.data.user}))
                return {...state,authData: action?.payload.data}
            }
            return {...state,error: action?.payload.data.error}
        default:
            return state
    }
}