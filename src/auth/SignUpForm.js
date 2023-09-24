import React, { useState } from "react";
import css from "../components/css/SignUpFormPage.module.css";
import signup from "../assets/signup.png";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Alert } from "react-bootstrap";

function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/login");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  };

  return (
    <div className={css.SignUpBody}>
      <img src={signup} alt="" />
      <div className={css.FormContainer}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          {errors.username?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
          {errors.password1?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <label htmlFor="password2">Confirm your password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
          {errors.password2?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button
            variant="primary"
            className={css.Button}
            type="Submit"
            onSubmit={handleSubmit}
          >
            Sign Up
          </Button>
          {errors.non_field_errors?.map((message, idx) => (
            <Alert variant="warning" key={idx} className="mt-3">
              {message}
            </Alert>
          ))}
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
