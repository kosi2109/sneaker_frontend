import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import { getBrands } from "../../actions/brands";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
import Loading from "../Loading/Loading";
export default function Brands() {
  const back = false;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const { brands, isLoading } = useSelector((state) => state.brands);
  console.log(brands);
  return (
    <>
      <Nav back={back} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container pt-5">
          <div className="row">
            {brands.map((brand) => (
              <div className="col-lg-3">
                <Link to={`/brand/${brand.brand}`}>
                  <div className="brContainer">
                    <img src={brand.icon} alt="" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
