import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProductsByBrand} from "../../actions/products"
import Product from './Product/Product';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from 'react-router';
import Nav from "../Nav/Nav"
import Loading from '../Loading/Loading';



export default function Products() {
    const { brand } = useParams()
    
    const dispatch = useDispatch()
  
    useEffect(()=>{
        dispatch(getProductsByBrand(brand))
    },[dispatch])

    const {products,isLoading} = useSelector((state)=> state.products)
    
    return (
        
            <>
                <Nav back={true} uri={"brand"}/>
                 
                <div className="container-fluid">
                {isLoading ? <Loading/> :
                    <Carousel showStatus={false} showIndicators={false} className="item-container mt-5" >
                {products.map((product)=>(
                    <Product product={product} />
                ))}
                </Carousel>}
                </div>
                
            </>
        
        
    )
}



