import React from "react";
import css from "./css/NavLinks.module.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <ul>
      <li onClick={props.handleClose}>
        <Link to="/">
          <BiHomeAlt2 /> Home
        </Link>
      </li>
      <li>
        <Link to="/login" onClick={props.handleClose}>
          <AiOutlineLogin /> Login
        </Link>
      </li>
      <li>
        <Link to="signup" onClick={props.handleClose}>
          <IoCreateOutline /> Sign Up
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
