import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./style.css";
import { addToCart } from "../../../actions/order";
import { useDispatch } from "react-redux";
export default function Product({ product }) {
  const [color,setColor] = useState(0)
  const [size, setSize] = useState(0)
  const dispatch = useDispatch()
  
  const addCart = ()=>{
    const cartData = {
      p_id : product._id,
      name:product.name,
      image: product.featureImage,
      size:product.option[color].stock[size].size.size,
      color:product.option[color].color.color,
      price:product.option[color].stock[size].price,
      quantity: 1,
      color_value:color,
      size_value: size
    } 
    dispatch(addToCart(cartData))
  }
  

  const stockCheck = (s,index)=>{
    if (index==size){
      return (
        <div className="sizeIcon active" onClick={()=> setSize(index)}>
        <h6>{s.size.size}</h6>
        </div>)
    }else if (product.option[color].stock[size].stock < 1){
      return (
        <div className="sizeIcon outStock" disabled={true} onClick={()=> setSize(size)}>
        <h6>{s.size.size}</h6>
      </div>)
    }else{
      return (
        <div className="sizeIcon" onClick={()=> setSize(index)}>
        <h6>{s.size.size}</h6>
        </div>)
    }
    
  }
  if (!product.option) return "loading"
  return (
    <div className="row item-container">
      <div className="col-lg-1"></div>
      <div className="col-lg-3">
        <h2 className="text-start mb-4">{product.brand.brand}</h2>
        <h2 className="text-start mb-4" id={`${product._id}_name`}>{product.name}</h2>
        <h6 className="text-start mb-4">{product.description}</h6>
      </div>
      <div className="col-lg-4">
        <Carousel showArrows={false} animationHandler="fade" thumbWidth={50} showStatus={false}>
          {product.option[color].images.map((im) => (
            <div>
              <img src={im} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="col-lg-3">
      <div className="size" >
        <h5>Sizes</h5>
        <div className="sizeContainer">
        {product.option[color].stock.map((s,index)=>(
          
          stockCheck(s,index)
          
        ))}
        </div>
        
        </div>
        <div className="price" >
          <h5>Price</h5>
          <h5>$ {product.option[color].stock[size].price}</h5>
          
        </div>
        <div className="color">
          <h4>Color</h4>
          <div className="colorContainer">
          {product.option.map((c,index)=>(
            <div onClick={()=> setColor(index)} style={{backgroundColor: ""+c.color.hex}} className="colorIcon"></div>
          ))}
          </div>
        </div>
        <button className="addCart" onClick={()=> addCart()} >
          ADD TO CART</button>
        
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}


