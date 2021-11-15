import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import CartItems from './CartItems/CartItems'
import "./style.css"
import {createOrder} from "../../actions/order"

export default function Cart() {
    const dispatch = useDispatch()
    var items = useSelector((state)=> state.orderItems)
    const subTotal = items.map((item)=> item.quantity * item.price)
    
    
    if (subTotal.length > 0){
        var total = parseInt(subTotal.reduce((a,b)=> a+b))
        var tax = total * 0.05
        var gtotal = parseInt(total) + tax
    }
    if (items.length < 1 ) return (<>
        <Nav back={true} />
        <h1>No Items</h1>
    </>)
    console.log(JSON.stringify(items))
    function comfirmOrder(){
        const data = {
            name : "KOsi",
            address : "ssss",
            phone: "0988888",
            email : "@@@",
            order_items : JSON.stringify(items)
        }
        dispatch(createOrder(data))
        
    }
    return (
        <>
        <Nav back={true} />
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
                        <button onClick={()=> comfirmOrder()} className="checkout">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
