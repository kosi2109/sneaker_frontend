import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { auth } from '../../actions/auth'
import { useNavigate } from 'react-router-dom';
import "./style.css"
import Nav from '../Nav/Nav';


export default function Auth() {
    const dispatch = useDispatch()
    const history = useNavigate()
    const [form , setForm ] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password : "",
        password2: "",
        isSignup : false
    })
    const err = useSelector((state)=>  state.error)
    

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (form.password !==  form.password2){
            document.querySelector(".errMessage").innerHTML = `<p>Password doesn't match</p>`
             
        }else{
            dispatch(auth(form,history))  
        }
    }   

    if (err!= null){
        localStorage.setItem("error",err)
        const error = localStorage.getItem("error")
        document.querySelector(".errMessage").innerHTML = `<p>${error}</p>`
    }
    return (
        <>
        <Nav back={true} uri={'checkout'} />
        <div className="formContainer">
            <form onSubmit={handleSubmit} className="authForm">
            <h3>{form.isSignup ? "Signup" : "Login"}</h3>
            {form.isSignup ? 
            <>  
                <label>First Name</label>
                <input required type="text" name="firstName" value={form.firstName} onChange={handleChange} />
                <label>Last Name</label>
                <input required type="text" name="lastName" value={form.lastName} onChange={handleChange} />
            </>: ""}
            <label>Email</label>
            <input required type="text" name="email" value={form.email} onChange={handleChange} />
            <label>Password</label>
            <input required type="password" name="password" value={form.password} onChange={handleChange} />
            {form.isSignup ? 
            <>  
               <label>Comfirm Password</label>
                <input required type="password" name="password2" value={form.password2} onChange={handleChange} />
            </>: ""}
            <div className="errMessage mt-2 text-danger">

            </div>
            <button className="login my-3" type="submit">{form.isSignup ? "Signup" : "Login"}</button>
            <div style={{width:"100%"}}>
                <p>
                    {form.isSignup ? "Already have an account ?" : "You don't have an account ?" }
                </p>
                
                <button className="login" type="button" onClick={()=> setForm({...form,isSignup: !form.isSignup})}>{form.isSignup ? "Login" : "Signup"}</button>
            </div>
            
            </form>
        </div>
        </>
    )
}
