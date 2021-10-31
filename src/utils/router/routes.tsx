import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "pages/Home";
import Profile from "pages/Profile";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];
export default routes;
