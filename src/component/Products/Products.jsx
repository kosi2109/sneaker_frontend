import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByBrand } from "../../actions/products";
import Product from "./Product/Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams, useNavigate } from "react-router";
import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";

export default function Products() {
  const { brand } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByBrand(brand, history));
  }, [dispatch]);

  const { products, isLoading } = useSelector((state) => state.products);
  console.log(products);
  return (
    <>
      <Nav back={true} uri={"brand"} />

      <div className="container-fluid">
        {isLoading ? (
          <Loading />
        ) : (
          <Carousel
            showStatus={false}
            showIndicators={false}
            className="item-container mt-5"
          >
            {products.map((product, i) => (
              <Product product={product} key={i} />
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
}
