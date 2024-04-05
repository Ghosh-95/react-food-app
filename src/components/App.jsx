import { Suspense, lazy, useEffect, useState } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import HeaderComponent from './Header';
import MainComponent from './MainComponent';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Shimmer from './Shimmer';
import Footer from './Footer';
import userContext from '../utils/userContext';

const Cart = lazy(() => import("./Cart"));
const ResMenu = lazy(() => import("./ResMenu"));

function App() {
  const [userName, setUsername] = useState('');

  useEffect(() => {
    const data = {
      userName: "Sushovan Ghosh",
    };

    setUsername(data.userName);
  }, []);

  return (
    <userContext.Provider value={{ userName: userName }}>
      <userContext.Provider value={{ userName: "Ghosh" }}>
        <HeaderComponent />
      </userContext.Provider>
      <Outlet />
      <Footer />
    </userContext.Provider>
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
        element: <Suspense fallback={<Shimmer />}><Cart /></Suspense>
      },
      {
        path: '/restaurant/:id',
        element: <Suspense fallback={<Shimmer />}><ResMenu /></Suspense>
      }
    ],
    errorElement: <Error />
  },


])

export default appRouter;
