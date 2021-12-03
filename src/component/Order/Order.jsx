import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOrder } from "../../actions/order";
import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import moment from "moment";
import "./style.css";

export default function Order() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch]);

  const { order, isLoading } = useSelector((state) => state.order);
  console.log(order);
  return (
    <>
      <Nav back={true} uri={"profile"} />
      {isLoading || order == null ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row mt-2">
            <div className="col-lg-12">
              <div className="orderDetailContainer shadow p-3 bg-light">
                <div className="orderHeader">
                  <div className="orderPersonal">
                    <h4>{order.name}</h4>
                    <h4>{order.email}</h4>
                    <h4>{order.phone}</h4>
                    <h4>{order.address}</h4>
                  </div>
                  <div className="orderDetail">
                    <h4>OrderID({order._id})</h4>
                    <h4>{moment(order.order_date).format("MMM Do YY")}</h4>
                    <h4>Status : {order.status}</h4>
                    <h4>Total : {order.total}</h4>
                  </div>
                </div>
                <div className="orderBody mt-2">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Color</th>
                        <th scope="col">Size</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.order_items.map((item, i) => (
                        <tr>
                          <th scope="row">{item.name}</th>
                          <td>{item.color}</td>
                          <td>{item.size}</td>
                          <td>{item.qty}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
