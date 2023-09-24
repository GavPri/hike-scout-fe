import React, { useState } from "react";
import css from "../components/css/SignUpFormPage.module.css";
import signup from "../assets/signup.png";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useSetCurrentUser } from "../contexts/CurrentUserContext";

function LoginForm() {
  const setCurrentUser = useSetCurrentUser();
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;

  const handleChange = (event) => {
    setSignInData({ ...signInData, [event.target.name]: event.target.value });
  };

  const history = useHistory();

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
  return (
    <div className={css.SignUpBody}>
      <img src={signup} alt="" />
      <div className={css.FormContainer}>
        <h1>Login</h1>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {errors.password?.map((message, idx) => (
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
            Login
          </Button>
          {errors.non_field_errors?.map((message, idx) => (
            <Alert variant="warning" key={idx} className="mt-3">
              {message}
            </Alert>
          ))}
        </form>
        <Link to="/signup">
          <p className={css.LinkP}>
            Don't have an account? <span>Sign Up</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
