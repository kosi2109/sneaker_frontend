import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import {createOrder} from "../../actions/order"

export default function Checkout() {
    const dispatch = useDispatch()
    var items = useSelector((state)=> state.orderItems)
    const initialForm = {
        name : "",
        address : "",
        phone : "",
        email: ""
    }
    const [form,setForm] = useState(initialForm)

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    
    function comfirmOrder(){
        const data = {
            name : form.name,
            address : form.address,
            phone: form.phone,
            email : form.email,
            order_items : items.map((item=> {
                return {
                item : item.p_id,
                quantity : item.quantity,
                option : {
                    size : item.size_value,
                    color : item.color_value
                }
                }
            }))
        }
        dispatch(createOrder(data))
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        comfirmOrder()
        setForm(initialForm)
    }
    return (
        <>
            <Nav back={true} uri={'cart'} />
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} onChange={handleChange} />
                <input type="text" name="address" value={form.address} onChange={handleChange} />
                <input type="text" name="phone" value={form.phone} onChange={handleChange} />
                <input type="email" name="email" value={form.email} onChange={handleChange} />
                <input type="submit" />
            </form> 
        </>
    )
}
