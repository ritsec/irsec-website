import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.scss";
import logo from "../../res/logo512.png";

const Nav: React.FC = (): React.ReactElement => {
  return (
    <nav className="nav">
      <NavLink className="logo-link" to="/">
        <img src={logo} className="logo" />
      </NavLink>
      <div className="links">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/resources">
          Resources
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
