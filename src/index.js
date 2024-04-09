import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header.jsx';
import Main from './Pages/Main/Main.jsx';
import Catalog from './Pages/Catalog/Catalog.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },

  {
    path: "/catalog",
    element: <Catalog/>,
  },
]);

root.render(
    <React.StrictMode>
      <Header/>

      <RouterProvider router={router} />
    </React.StrictMode>
);