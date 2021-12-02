import React from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../../actions/order";
import "./style.css";

export default function CartItems({ item, index }) {
  const dispatch = useDispatch();
  function update(index, type) {
    const data = { index, type };
    dispatch(updateCart(data));
  }

  const subTtotal = item.quantity * item.price;
  return (
    <div className="row itemContainer shadow-sm mb-3">
      <div className="col-lg-4">
        <div className="cartImg">
          <img src={item.image} alt="" />
        </div>
      </div>
      <div className="col-lg-8">
        <div className="detailContainer">
          <h4>{item.name}</h4>
          <div className="option">
            <h5>
              <span className="detailConstant">Color: </span> {item.color}
            </h5>
            <h5>
              <span className="detailConstant">Size: </span> {item.size}
            </h5>
            <h5>
              <span className="detailConstant">Qty: </span> {item.quantity}
            </h5>
            <h5>
              <span className="detailConstant">Price: </span> {item.price}
            </h5>
            <h5>
              <span className="detailConstant">Total: </span> ${subTtotal}
            </h5>
          </div>
        </div>
      </div>
      <div className="cContainer">
        <div onClick={() => update(index, "add")}>
          <h6>+</h6>
        </div>
        <div onClick={() => update(index, "reduce")}>
          <h6>-</h6>
        </div>
        <div onClick={() => update(index, "remove")}>
          <h6>x</h6>
        </div>
      </div>
    </div>
  );
}
