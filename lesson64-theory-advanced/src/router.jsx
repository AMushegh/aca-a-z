import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Journeys from "./pages/Journeys";
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
        path: "/journeys",
        element: <Journeys />,
      },
    ],
  },
]);
