import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'

export default function Cart() {
    const items = useSelector((state)=> state.orderItems)
    return (
        <>
        <Nav back={true} />
            {items.map(item=>(
                <div className="mb-5">
                    <h1>{item.name}</h1>
                    <h6>{item.quantity}</h6>
                    <h6>{item.color}</h6>
                    <h6>{item.size}</h6>
                </div>

            ))}
        </>
    )
}
