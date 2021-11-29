import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import {createOrder} from "../../actions/order"
import "./style.css"
import {Link} from "react-router-dom"
import { getUserData } from '../../actions/auth'

export default function Checkout() {
    const dispatch = useDispatch()
    

    const profile = useSelector((state)=> state.auth.authData)
    var initialForm = {
        name : "",
        address : "",
        phone : "",
        email: ""
    }
      
    
    var items = useSelector((state)=> state.orderItems)
    var order = useSelector(state => state.orders)
    const [form,setForm] = useState(initialForm)
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
        
    
    function comfirmOrder(){
        const data = {
            name : form.name,
            userId: form.userId,
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
        const login = document.querySelector(".login")
        if (order.isLoading){
            login.innerHTML = `Sending`
        }
    }
    const useAsAcc = () =>{
        var {user_id} = JSON.parse(localStorage.getItem("profile"))
        dispatch(getUserData(user_id))
        setForm({
            userId: profile._id,
            name : profile.fullName,
            address : profile.address,
            phone : profile.phone,
            email: profile.email
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        comfirmOrder()
        setForm(initialForm)
    }
    return (
        <>
            <Nav back={true} uri={'cart'} />
            <div className="shippingContainer">
            <form onSubmit={handleSubmit} className="shippingForm">
                <h2>Shipping Informations</h2>
                <label className="mb-2"> Name </label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
                <label className="mb-2"> Address </label>
                <textarea required name="address" value={form.address} onChange={handleChange} cols="20" rows="3"></textarea>
                <label className="mb-2"> Phone </label>
                <input required type="text" name="phone" value={form.phone} onChange={handleChange} />
                <label className="mb-2"> Email </label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} />
                {!items.length < 1 ?
                    <button type="submit" className="mt-3 mb-3 login">
                    Comfirm Order
                    </button>
                : 
                    <button type="submit" className="mt-3 mb-3 login" disabled>
                    No Item
                    </button>
                }
                
                {!profile ? 
                    <div className="loginCon">
                    <p style={{width:"100%"}}>Please login to save your informations and order histories . </p>
                    <Link to="/auth" style={{width:"100%"}}>
                        <button className="login">Login</button>
                    </Link>
                    </div>
                :
                    <div className="loginCon">
                    <p style={{width:"100%"}}>Use Address From Account .</p>
                    
                    <button type="button" className="login" onClick={useAsAcc}>Use</button>
                
                    </div>
                }
                
                
            </form>
            </div>
        </>
    )
}
