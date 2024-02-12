// Layout.jsx
import React, { createContext, useState, useContext } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

const CartContext = createContext();

export const Layout = () => {
  const [cartForHeader, setCartForHeader] = useState([]);

  const handleSetCartForHeader = (dataFromChild) => {
    setCartForHeader((prev) => [...prev, dataFromChild]);
    console.log('from the layout');
    console.log(cartForHeader);
  };

  return (
    <CartContext.Provider value={{ handleSetCartForHeader }}>
      <Header />
      <Outlet />
      <Footer />
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
