import {AUTH} from "../constants/actionType"
import * as api from "../api/index"

export const auth = (formData,history) => async (dispatch)=>{
    
    try {
        if (formData.isSignup){
            const {data} = await api.signup(formData)
            dispatch({type : AUTH , payload :{data}})
        }else{
            const {data} = await api.login(formData)
            dispatch({type : AUTH , payload :{data}})
        }
        
        history(`/`,{ replace: true })
        
    } catch (error) {
        console.log(error)
    }
}