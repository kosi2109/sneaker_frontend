import React from 'react'
import ECIMG from "./emptyCart.png"
import "./style.css"

export default function EmptyCart() {
    return (
        <div className="ecContainer">
            <div>
                <img src={ECIMG} alt="" />
            </div>
            <h3>Your Cart is Currently Empty !</h3>
        </div>
    )
}
