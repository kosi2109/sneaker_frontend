import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logout } from "../../actions/auth";
import { getOrders } from "../../actions/order";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useNavigate();
  var { user_id } = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getUserData(user_id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrders(user_id));
  }, [dispatch]);
  const profile = useSelector((state) => state.auth.authData);
  const { orders, isLoading } = useSelector((state) => state.orders);

  return (
    <>
      <Nav back={false} />
      {!isLoading && profile != null ? (
        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="profileContainer mb-3">
                <h3>{profile.fullName}</h3>
                <h4>{profile.phone}</h4>
                <h4>{profile.email}</h4>
                <h4>{profile.address}</h4>
                <button
                  className="login"
                  onClick={() => dispatch(logout(history))}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div>
                {orders.map((order, i) => (
                  <Link
                    to={`/order/${order._id}`}
                    key={i}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="orderContainer">
                      <h4>Order ID {order._id}</h4>
                      <div>
                        <h5>Total : ${order.total}</h5>
                        <h5>
                          Order Date :{" "}
                          {moment(order.order_date).format("MMM Do YY")}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
