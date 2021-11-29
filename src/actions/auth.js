import {AUTH, ERROR,GET_USER_DATA, LOGOUT} from "../constants/actionType"
import * as api from "../api/index"

export const auth = (formData,history) => async (dispatch)=>{
    
    try {
        if (formData.isSignup){
            await api.signup(formData)
            const {data} = await api.login(formData)
            
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

export const getUserData = (id)=> async (dispatch)=>{
    try {
        if (id != null){
            const {data} = await api.userData(id)
            dispatch({type:GET_USER_DATA,payload:{data}})
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const logout = (history) => async (dispatch)=>{
    try {
        dispatch({type:LOGOUT})
        history(`/`,{ replace: true })
    } catch (error) {
        console.log(error.message)
    }

}