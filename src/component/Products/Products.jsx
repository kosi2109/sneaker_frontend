import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts,getProductsByBrand} from "../../actions/products"
import Product from './Product/Product';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from 'react-router';
import { getBrands } from '../../actions/brands';
import Nav from "../Nav/Nav"



export default function Products() {
    const back = true
    const { brand } = useParams()
    
    const dispatch = useDispatch()
  
    useEffect(()=>{
        dispatch(getProductsByBrand(brand))
    },[dispatch])

    const {products,isLoading} = useSelector((state)=> state.products)
    
    return (
        isLoading ? <h1>Loading</h1> :(
            <>
                <Nav back={back}/>
                <div className="container-fluid">
                    
                    <Carousel showStatus={false} showIndicators={false} className="item-container mt-5" >
                {products.map((product)=>(
                    <Product product={product} />
                ))}
                </Carousel>
                </div>
            </>
        )
        
    )
}



