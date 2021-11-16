import React from 'react';
import Products from './component/Products/Products';
import Brands from "./component/Brands/Brands"
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
import Home from './component/Home/Home';
import Cart from './component/Cart/Cart';
import Checkout from './component/Checkout/Checkout';



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/brand/:brand' element={<Products />}></Route>
      <Route path='/brand' element={<Brands />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
