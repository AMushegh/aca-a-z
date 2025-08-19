import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const More = lazy(() => import("./pages/More"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "*",
        element: "not found",
      },
    ],
  },
]);
