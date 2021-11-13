import React from "react";
import { useSelector } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import Back from "./back.png"
import Bag from "./bag.png"
import "./style.css"
export default function Nav({back}) {
  const items = useSelector((state)=> state.orderItems)
  const count = items.reduce((a,b)=> a.quantity + b.quantity )
  const history = useNavigate()

  return (
    <div className="nav px-5">
      <h2 className="logo"> <Link to="/">kalli</Link> </h2>
      {back ? <div className="back" onClick={()=>history('/brand',{ replace: true })}>
        <img src={Back} alt="" />
        <h5>Back</h5>
      </div> : "" }
      <Link to="/">
        <div style={{position:"relative",height:"100%",width:"40px"}}>
          <img className="bag" src={Bag} alt="" />
          <div className="cartCount">
          <h6 >{count}</h6>
          </div>
          
        </div>
      </Link>
      
    </div>
  );
}
