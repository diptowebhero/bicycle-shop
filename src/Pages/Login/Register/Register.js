import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link ,useHistory} from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import loader from "../../../assets/images/Ripple-1s-200px.gif";
const Register = () => {
  const { Allcontext } = useAuth();
  const history = useHistory();
  const { registerNewUser, loading} = Allcontext;
  const [registerData, setRegisterData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData };
    newLoginData[field] = value;
    setRegisterData(newLoginData);
  };
  const handleRegister = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Both Password did not match");
    }
    registerNewUser(
      registerData.email,
      registerData.password,
      registerData.name,
      registerData.photo,
      history
    );
    e.preventDefault();
  };
  return (
    <Container className="py-5 my-5 text-center">
      <div className="form-container">
        {!loading && (
          <form onSubmit={handleRegister} className="shadow">
            <h1 className="mb-2">Register</h1>
            <span>or use your email for password</span>
            <input
              name="name"
              onBlur={handleOnBlur}
              placeholder="Your Name"
              required
            />
            <input
              name="email"
              type="email"
              onBlur={handleOnBlur}
              placeholder="Your Email"
              required
            />
            <input
              name="password"
              type="password"
              onBlur={handleOnBlur}
              placeholder="Your Password"
              required
            />
            <input
              name="password2"
              type="password"
              onBlur={handleOnBlur}
              placeholder="Re-Type Password"
              required
            />
            <input
              name="photo"
              type="img"
              onBlur={handleOnBlur}
              placeholder="image-url"
              required
            />
            <button type="submit">Register</button>
            <Link to="/login" className="fw-bold toggle py-2">
              Already Register? Please Login
            </Link>
          </form>
        )}
        {loading && <img src={loader} alt="" />}
      </div>
    </Container>
  );
};

export default Register;
