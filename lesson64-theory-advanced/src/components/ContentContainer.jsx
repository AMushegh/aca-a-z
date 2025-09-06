import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";

const ContentContainer = () => {
  return <RouterProvider router={router} />;
};

export default ContentContainer;
