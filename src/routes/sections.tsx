import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import NotFoundPage from "../pages/Page404";
import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard";

export const IndexPage = lazy(() => import("../pages/app"));
export const BlogPage = lazy(() => import("../pages/blog"));
export const UserPage = lazy(() => import("../pages/user"));
export const LoginPage = lazy(() => import("../pages/login"));
export const ProductsPage = lazy(() => import("../pages/products"));

// ----------------------------------------------------------------------

export default function Router() {
  const loggedInUser = sessionStorage.getItem("userToken")
  const routes = useRoutes([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "dashboard",
      element: loggedInUser ? (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ) : <Navigate to="/404" replace />,
      children: [
        { element: <IndexPage />, index: true },
        { path: "status", element: <UserPage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "blog", element: <BlogPage /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "404",
      element: <NotFoundPage />,
    }
  ]);

  return routes;
}
