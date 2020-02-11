import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="flex">
      <Link to={"/"}>
        <h1>Phone Catalogue</h1>
      </Link>
    </nav>
  );
};

export default NavBar;
