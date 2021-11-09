import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "pages/Home";
import Profile from "pages/Profile";
import ProductDetails from "pages/ProductDetails";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
  },
];
export default routes;
