import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Applayout } from './components/Applayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/mainpage/Home';
import { About } from './components/mainpage/About';
import { Contact, handleForm } from './components/mainpage/Contact';
import { Productdetails } from './components/Productdetails';
import { Products } from './components/mainpage/Products';
import { Errorpage } from './components/Errorpage';
import { Orders } from "./components/Orders";
import { Carts } from './components/Carts';
function App() {
  const [cartItems, setCartItems] = useState([]);
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <Errorpage />,
      children: [{
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        action: handleForm,
      },
      {
        path: "/products",
        element: <Products />,

      },
      {
        path: "/products/:id",
        element: <Productdetails cartItems={cartItems} setCartItems={setCartItems}  />

      },
      {
        path: "/carts",
        element: <Carts cartItems={cartItems} setCartItems={setCartItems}  />,
      },

{
  path: "/orders",
  element: <Orders />,
}

      ],

    },

  ]);
  return <RouterProvider router={router} />

}

export default App
