import React, { useEffect, useState } from "react";
import Products from "./component/Products/Products";
import Brands from "./component/Brands/Brands";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./component/Home/Home";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";
import Auth from "./component/Auth/Auth";
import ProfileIcon from "./component/Profile/ProfileIcon";
import Profile from "./component/Profile/Profile";
import { useSelector } from "react-redux";
import NotFound from "./component/404/NotFound";
import Order from "./component/Order/Order";

function App() {
  const { logged } = useSelector((state) => state.auth);
  const profile = localStorage.getItem("profile");

  return (
    <Router>
      {logged || profile ? <ProfileIcon /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:brand" element={<Products />} />
        <Route path="/brand" element={<Brands />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/auth"
          element={
            logged || profile ? <Navigate replace to="/profile" /> : <Auth />
          }
        />
        <Route
          path="/profile"
          element={
            logged || profile ? <Profile /> : <Navigate replace to="/" />
          }
        />
        <Route path="/order/:id" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
