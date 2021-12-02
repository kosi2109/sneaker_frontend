import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFromCart } from "../../actions/order";
import Back from "./back.png";
import Bag from "./bag.png";
import "./style.css";

export default function Nav({ back, uri }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFromCart());
  }, [dispatch]);

  var items = useSelector((state) => state.orderItems);

  if (items != null && items.length > 0) {
    items = items.map((i) => i.quantity);
    var count = items.reduce((a, b) => a + b);
  }

  const history = useNavigate();

  return (
    <div className="nav px-5">
      <h2 className="logo m-0">
        {" "}
        <Link to="/">kalli</Link>{" "}
      </h2>
      {back ? (
        <div
          className="back"
          onClick={() => history(`/${uri}`, { replace: true })}
        >
          <img src={Back} alt="" />
        </div>
      ) : (
        ""
      )}
      <Link to="/cart">
        <div style={{ position: "relative", height: "100%", width: "40px" }}>
          <img className="bag" src={Bag} alt="" />
          <div className="cartCount">
            <h6>{count ? count : 0}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
