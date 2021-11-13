import {FETCH_ALL_COLOR} from "../constants/actionType"
import * as api from "../api/index"

export const getColors = () => async (dispatch)=>{
    try {
        const {data} = await api.fetchColors()

        dispatch({type : FETCH_ALL_COLOR , payload :data})
    } catch (error) {
        console.log(error)
    }
}