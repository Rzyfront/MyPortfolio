import React from "react";
import logo from "../../assets/Rz_Logo.svg";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="Rz_Logo" width="50px" />
        <h1 className="Name">Rafael Martinez</h1>
      </div>
      <div className="options">
        <NavLink>
          <p>Home</p>
        </NavLink>
        <NavLink>
          <p>Contact me</p>
        </NavLink>
        <NavLink>
          <p>About</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
