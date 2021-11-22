import React from 'react'
import {  useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import CartItems from './CartItems/CartItems'
import "./style.css"

import { Link } from 'react-router-dom'

export default function Cart() {
    
    var items = useSelector((state)=> state.orderItems)
    
    if (items.length < 1 ) return (<>
        <Nav back={true} uri={'brand'} />
        <h1>No Items</h1>
    </>)

    var subTotal = items.map((item)=> item.quantity * item.price)
    var total = parseInt(subTotal.reduce((a,b)=> a+b))
    var tax = total * 0.05
    var gtotal = parseInt(total) + tax
    
    return (
        <>
        <Nav back={true} uri={'brand'} />
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-8">
                {items.map((item,index)=>(
                    <CartItems item={item} index={index} />
                ))}
                </div>
                <div className="col-lg-3">
                    <div className="priceContainer shadow-sm">
                        <h4>Summary</h4>
                        <div className="priceDetail">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>SUBTOTAL</h5>
                                <h5>$ {total}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>TAX</h5>
                                <h5>+{tax}(5%)</h5>
                            </div>
                        </div>
                        <div className="total">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>TOTAL</h5>
                                <h5>$ {gtotal}</h5>
                            </div>
                        </div>
                        <Link to="/checkout">
                            <button className="checkout" >Checkout</button>
                        </Link>
                        
                        
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
