import {FETCH_ALL_SIZE} from "../constants/actionType"
import * as api from "../api/index"

export const getSizes = () => async (dispatch)=>{
    try {
        const {data} = await api.fetchSizes()

        dispatch({type : FETCH_ALL_SIZE , payload :data})
    } catch (error) {
        console.log(error)
    }
}