import React from 'react'
import {Link} from "react-router-dom"
import "./style.css"
import IMG from "./user.svg"
export default function ProfileIcon() {
    return (
        <Link to="/profile">
            <div className="pfIcon">
                <img src={IMG} alt="" />
            </div>
        </Link>
    )
}
