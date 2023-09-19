import React from "react";
import css from "./css/NavLinks.module.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import NavLink from "react-router-dom"; // Import NavLink from react-router-dom

function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/">
          <BiHomeAlt2 /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">
          <AiOutlineLogin /> Login
        </NavLink>
      </li>
      <li>
        <NavLink to="signup">
          <IoCreateOutline /> Sign Up
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
