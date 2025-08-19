import React from "react";

import { Navigate, Outlet, Route, Routes } from "react-router";
import Home from "../pages/Home";
import More from "../pages/More";
import AboutUs from "../pages/AboutUs";
import { Header } from "./Header";
import { User } from "./User";

const DashboardWrapper = () => {
  return (
    <div>
      <p>Dashboard wrapper</p>

      <Outlet />
    </div>
  );
};

const StandardWrapper = () => {
  return (
    <div>
      <p>StandardWrapper</p>

      <Outlet />
    </div>
  );
};

const AuthWrapper = () => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to={"/"} />;
};

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/more" element={<More />} />

          <Route path="/dashboard" element={<DashboardWrapper />}>
            <Route index element="dashboard-home" />
            <Route path="exact" element="dashboard-exact" />
          </Route>

          <Route element={<AuthWrapper />}>
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element="form" />
          </Route>

          <Route path="users" element="allusers">
            <Route index element="all users" />
            {/* <Route path=":id" element={<User />} /> */}
          </Route>

          <Route path="*" element="not found"></Route>
        </Routes>
      </main>
    </>
  );
};
