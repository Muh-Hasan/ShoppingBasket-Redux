import React from 'react';
import './App.css';
// components
import ProductDis from './components/product/index'
import Cart from './components/cart/index'
import { ProductItem } from './store/state'
// router 
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import { useSelector } from 'react-redux'


function App() {
  const products = useSelector((state: ProductItem[]) => state)
  let totalQ = products.filter(product => product.added).length
  return (
    <Router>
        <div className='bar'>
          <span className='logo'>Shoe Store</span>
          <Link to='/'>
            <span className='sp-one'>Products</span>
          </Link>
          <Link to='/cart'>
            <span className='sp-one'>Cart({totalQ})</span>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<ProductDis />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
  );
}

export default App;
