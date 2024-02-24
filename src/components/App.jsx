import { useState } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import '../css/App.css';
import HeaderComponent from './Header';
import MainComponent from './MainComponent';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Cart from './Cart';
import ResMenu from './ResMenu';

/**
 * Food Order App
 * => Components:
 *    - Header
 *      * Logo
 *      * Nav Links
 *      * Cart Button
 *    - Main
 *      * Search Bar
 *      * Restaurant Body
 *        - Restaurant Card
 *          # Image
 *          # Name of the Restaurant, delivery time, Star rating, cuisine
 *    - Footer
 *      * Links
 *      * Copyright
 * 
 */

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainComponent />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:id',
        element: <ResMenu />
      }
    ],
    errorElement: <Error />
  },


])

export default appRouter;
