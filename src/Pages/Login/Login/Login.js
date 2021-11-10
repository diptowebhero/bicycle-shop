import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import loader from "../../../assets/images/Ripple-1s-200px.gif";
import "./Login.css";
const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { Allcontext } = useAuth();
  const { sigInWithGoogle, loginUserEmailAndPassword, loading } = Allcontext;
  const [registerData, setRegisterData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData };
    newLoginData[field] = value;
    setRegisterData(newLoginData);
  };
  const handleLoginUser = (e) => {
    loginUserEmailAndPassword(
      registerData.email,
      registerData.password,
      location,
      history
    );
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    sigInWithGoogle(location, history);
  };
  return (
    <Container className="py-5 my-5 text-center">
      <div className="form-container">
        {!loading && (
          <form onSubmit={handleLoginUser} className="shadow">
            <h1>Sign In</h1>
            <div className="social-container">
              <a href className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href className="social">
                <i
                  onClick={handleGoogleSignIn}
                  class="fab fa-google-plus-g"
                ></i>
              </a>
              <a href className="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for password</span>
            <input
              name="email"
              type="email"
              onBlur={handleOnBlur}
              placeholder="Email"
              required
            />
            <input
              name="password"
              type="password"
              onBlur={handleOnBlur}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
            <Link to="/register" className="fw-bold toggle py-2">
              New User? Please Create Account
            </Link>
          </form>
        )}
        {loading && <img src={loader} alt="" />}
      </div>
    </Container>
  );
};

export default Login;
