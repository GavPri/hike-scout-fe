import React from "react";
import css from "./css/NavBar.module.css";
import logo from "../assets/logo.png";
import NavOffCanvas from "./NavOffCanvas";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function NavBar() {
  return (
    <nav>
      {/* Logo */}
      <a>
        <img src={logo} alt="logo" />
      </a>
      {/* Navigation Menu */}
      <div className={css.HideLinks}>
        <NavLinks />
      </div>
      {/* Offcanvase */}
      <div className={css.HideCanvas}>
        <NavOffCanvas />
      </div>
    </nav>
  );
}

export default NavBar;
