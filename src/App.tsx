import React, { Suspense } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import routes from "utils/router/routes";
import AppLayout from "layout/AppLayout";
const App: React.FC = (): JSX.Element => {
  const mainRoutes: RouteObject = {
    path: "/",
    element: <AppLayout />,
    children: routes,
  };
  const router_view = useRoutes([mainRoutes]);

  return <Suspense fallback={<p>loading</p>}>{router_view}</Suspense>;
};

export default App;
