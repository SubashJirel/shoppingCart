import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Cart from './components/cart/Cart.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Shop from './components/shop/Shop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
