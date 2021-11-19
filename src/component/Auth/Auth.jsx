import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { auth } from '../../actions/auth'
import { useNavigate } from 'react-router-dom';


export default function Auth() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const [form , setForm ] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password : "",
        isSignup : false
    })

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(auth(form,history))
        
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {form.isSignup ? 
            <> 
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
            </>: ""}
            <input type="text" name="email" value={form.email} onChange={handleChange} />
            <input type="password" name="password" value={form.password} onChange={handleChange} />
            <input type="submit" />
            <button type="button" onClick={()=> setForm({...form,isSignup: !form.isSignup})}>{form.isSignup ? "Login" : "Signup"}</button>
            </form>
        </div>
    )
}
