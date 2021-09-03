import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../res/logo512.png";

const Nav: React.FC = (): React.ReactElement => {
  return (
    <nav className="nav">
      <img src={logo} className="logo" />
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
