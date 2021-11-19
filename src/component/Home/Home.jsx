import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFeatureProducts } from "../../actions/products";
import Nav from "../Nav/Nav";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
export default function Home() {
  const back = false;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeatureProducts());
  }, [dispatch]);


  const {products,isLoading} = useSelector((state) => state.products);
  
  return (
    isLoading ? <h1>Loading</h1> :(
    <>
      <Nav back={back} />
      <div className="container-fluid px-5">
        <div className="row hero">
          <div className="col-lg-4">
            <div className="textContainer">
              <h3>
                What <br /> Are You <br /> Looking For
              </h3>
              <div>
              <Link to="/brand" className="me-3">
                <button>Shop Now</button>
              </Link>
              <Link to="/auth" >
                <button className="loginBtn">Login</button>
              </Link>
              </div>
              
            </div>
          </div>
          <div className="col-lg-8">
            <div className="caContainer">
              <Carousel
                interval={3000}
                dynamicHeight={false}
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                animationHandler={"fade"}
                autoPlay={true}
                showStatus={false}
                showIndicators={false}
              >
                {products.map((p) => (
                  <div className="swiperContainer">
                    <div className="fimgContainer">
                      <img src={p.featureImage} alt="" />
                    </div>
                    <h3 className="test">{p.name}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
}

// Home
//             {brands.map(b=>(
//                 <Link to={`/b/${b.brand}`}> {b.brand} </Link>
//             ))}
