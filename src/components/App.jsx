import { useState } from 'react';
import '../css/App.css';
import HeaderComponent from './Header';
import MainComponent from './MainComponent';

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

export default App;
