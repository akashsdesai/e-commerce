import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import Footer from "./Components/Footer/Footer";
import menBanner from './Components/Assets/banner_mens.png'
import womenBanner from './Components/Assets/banner_women.png'
import kidBanner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men'  element={<ShopCategory category='men' banner={menBanner} />} />
          <Route path='/women' element={<ShopCategory category='women'  banner={womenBanner} />} />
          <Route path='/kids'  element={<ShopCategory category='kid' banner={kidBanner}/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}  />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} >
            <Route path=":account" element={<LoginSignup/>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
