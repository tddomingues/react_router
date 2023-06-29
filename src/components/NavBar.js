import "./NavBar.css";

import React from "react";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
    </nav>
  );
};

export default NavBar;
