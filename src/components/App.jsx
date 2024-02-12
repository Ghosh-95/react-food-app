import { useState } from 'react';
import '../css/App.css';
import HeaderComponent from './Header';
import MainComponent from './MainComponent';
import About from './About';
import Contact from './Contact';
import { createBrowserRouter } from 'react-router-dom';

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
      <MainComponent />
    </>
  )
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },

])

export default appRouter;
