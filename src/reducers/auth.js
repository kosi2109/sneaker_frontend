import {AUTH,GET_USER_DATA} from "../constants/actionType"


export default (state = {authData:null},action)=>{
    switch(action.type){
        case AUTH:
            if(!action.payload.data.error){
                if (action.payload.data.result){
                    localStorage.setItem('profile', JSON.stringify({...action?.payload.data.result}))
                }
                return {...state,authData: action?.payload.data}
            }
            return {...state,error: action?.payload.data.error}
        case GET_USER_DATA:
            return {...state,authData: action?.payload.data} 
        default:
            return state
    }
}