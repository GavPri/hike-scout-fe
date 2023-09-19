import React from "react";
import css from "../../css/SignUpFormPage.module.css";
import signup from "../../../assets/signup.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SignUpForm() {
  return (
    <div className={css.SignUpBody}>
      <img src={signup} alt="" />
      <div className={css.FormContainer}>
        <h1>Sign Up</h1>
        <form>
          <label>Username</label>
          <input type="text" placeholder="Username" />
          <label>email</label>
          <input type="text" placeholder="Email" />
          <label>Password</label>
          <input type="text" placeholder="Password" />
          <label>Confirm your password</label>
          <input type="text" placeholder="Confirm your password" />
          <Button variant="primary" className={css.Button}>
            Sign Up
          </Button>
        </form>
        <Link to="/login">
        <p className={css.LinkP}>
          Already have an account? <span>Login</span>
        </p>
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm;
