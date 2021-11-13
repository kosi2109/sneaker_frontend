import {FETCH_ALL_CATE} from "../constants/actionType"
import * as api from "../api/index"

export const getBrands = () => async (dispatch)=>{
    try {
        const {data} = await api.fetchBrands()

        dispatch({type : FETCH_ALL_CATE , payload :data})
    } catch (error) {
        console.log(error)
    }
}