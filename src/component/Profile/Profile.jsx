import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../actions/auth'
import Nav from '../Nav/Nav'

export default function Profile() {
    const dispatch = useDispatch()
    var {user_id} = JSON.parse(localStorage.getItem("profile"))
    useEffect(()=>{
        dispatch(getUserData(user_id))
    },[dispatch])
    
    const profile = useSelector((state)=> state.auth.authData)
    
    return (
        <>
            <Nav back={false}/>
            {profile != null ? <div className="container">
                <div className="col-lg-3">
                    <h1>{profile.fullName}</h1>
                </div>
                <div className="col-lg-9">

                </div>
            </div> : ""}
            
        </>
    )
}
