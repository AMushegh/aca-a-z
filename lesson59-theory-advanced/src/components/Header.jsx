import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About us</NavLink>
          </li>
          <li>
            <NavLink to="/more">More</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
