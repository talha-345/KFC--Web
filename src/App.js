import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MenuPage from "./pages/MenuPage";
import CartViewOffCanvas from './components/CartViewOffCanvas';
import Footer from './components/Footer';
import CartViewMenu from './components/CartViewMenu';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState([]);

  const addToCart = (item) => {
    console.log(item);
    setCartItems([...cartItems, item]);
  }

  const showProduct = (item) => {
    console.log(item);
    setProduct([item]);
  }

  return (
    <>
      <CartViewOffCanvas cartItems={cartItems}/>
      <CartViewMenu product={product} addToCart={addToCart}/>
      <Header cartCounter={cartItems.length} />  
      <MenuPage addToCart={addToCart} showProduct={showProduct}/>
      <Footer />
    </>
  );
}
