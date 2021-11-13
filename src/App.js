import React from 'react';
import Products from './component/Products/Products';
import Brands from "./component/Brands/Brands"
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom"
import Home from './component/Home/Home';



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/brand/:brand' element={<Products />}></Route>
      <Route path='/brand' element={<Brands />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
