import {AUTH, ERROR} from "../constants/actionType"
import * as api from "../api/index"

export const auth = (formData,history) => async (dispatch)=>{
    
    try {
        if (formData.isSignup){
            const {data} = await api.signup(formData)
            
            
            if(!data.error){
                history(`/`,{ replace: true })
                dispatch({type : AUTH , payload :{data}})
            }else{
                dispatch({type : ERROR , payload :data.error})
            }
        }else{
            const {data} = await api.login(formData)
            
            if(!data.error){
                history(`/`,{ replace: true })
                dispatch({type : AUTH , payload :{data}})
            }else{
                dispatch({type : ERROR , payload :data.error})
            }
        }
        
        
        
    } catch (error) {
        console.log(error)
    }
}