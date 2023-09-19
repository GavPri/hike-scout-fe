import React from "react";
import css from "./css/NavBar.module.css";
import logo from "../assets/logo.png";
import NavOffCanvas from "./NavOffCanvas";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function NavBar(props) {
  return (
    <nav>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {/* Navigation Menu */}
      <div className={css.HideLinks}>
        <NavLinks onHide={props.handleClose} />
      </div>
      {/* Offcanvase */}
      <div className={css.HideCanvas}>
        <NavOffCanvas />
      </div>
    </nav>
  );
}

export default NavBar;
