import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {store } from './store/index'
// components
import ProductDis from './components/product/index'
import Cart from './components/cart/index'

function App() {
  return (
    <Provider store={store}>
    <div>
      <ProductDis />
      <Cart />
    </div>
    </Provider>
  );
}

export default App;
