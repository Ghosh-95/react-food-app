import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';

import '../css/App.css';
import HeaderComponent from './Header';
import MainComponent from './MainComponent';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import ResMenu from './ResMenu';
import Shimmer from './Shimmer';


const Cart = lazy(() => import("./Cart"));

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
        element: <Suspense fallback={<Shimmer />}><Cart /></Suspense>
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
