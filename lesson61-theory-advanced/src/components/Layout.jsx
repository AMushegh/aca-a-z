import React, { Suspense } from "react";

import { Header } from "./Header";
import { Outlet } from "react-router-dom";

const Loader = () => <div>Loading...</div>;

export const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <footer>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
        assumenda quisquam temporibus eos quos, provident mollitia accusantium,
      </footer>
    </>
  );
};
