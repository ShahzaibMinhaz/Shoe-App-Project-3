import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import Product from './Components/Product'
import Footer from './Components/footer'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Productitems from './Components/Productitems'


function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn">
              <FormatListBulletedIcon/>
            </label>
            <label className="logo">ShoE X</label>
            <ul>
              <li><Link to="/"><strong>Home</strong></Link></li>
              <li><Link to="Products"><strong>Products</strong></Link></li>
              <li><Link to="Cart"><strong>Cart</strong></Link></li>
            </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:id" element={<Productitems />} />
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </>  
  );
}

export default App;
