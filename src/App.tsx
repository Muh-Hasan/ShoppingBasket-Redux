import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {store } from './store/index'
// components
import ProductDis from './components/product/index'

function App() {
  return (
    <Provider store={store}>
    <div>
      <ProductDis />
    </div>
    </Provider>
  );
}

export default App;
