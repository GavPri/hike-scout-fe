import React from "react";
import css from "./css/NavLinks.module.css";
import { BiHomeAlt2 } from "react-icons/bi";
import {
  AiOutlineLogin,
  AiOutlineAlignCenter,
  AiOutlineHeart,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CurrentUserContext, SetCurrentUser } from "../App";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

function NavLinks(props) {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <li>
      <Link to="/posts.create" onClick={props.handleClose}>
        <FaRegPlusSquare /> Add Post
      </Link>
    </li>
  );

  const loggedOutIcons = (
    <>
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
    </>
  );
  const loggedInIcons = (
    <>
      <li>
        <Link to="/login" onClick={props.handleClose}>
          <AiOutlineAlignCenter /> Feed
        </Link>
      </li>
      <li>
        <Link to="/login" onClick={props.handleClose}>
          <AiOutlineHeart /> Liked
        </Link>
      </li>
      <li>
        <Link to="/" onClick={handleSignOut}>
          <AiOutlineLogout /> Log out
        </Link>
      </li>
      <li>
        <Link to={`/profiles/${currentUser?.profile_id}`}>
          <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
        </Link>
      </li>
    </>
  );
  return (
    <ul>
      <li onClick={props.handleClose}>
        <Link to="/">
          <BiHomeAlt2 /> Home
        </Link>
      </li>
      {currentUser && addPostIcon}
      {currentUser ? loggedInIcons : loggedOutIcons}
    </ul>
  );
}

export default NavLinks;
