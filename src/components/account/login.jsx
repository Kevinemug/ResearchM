import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./assets/css/style.css";
// import "./assets/css/style1.css";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const AccountLogin = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    if (!validateEmail(formInputs.email)) {
      errors.email = "Invalid email address";
    }
    if (formInputs.password.length < 4) {
      errors.password = "Password must be at least  5 characters";
    }
    if (Object.keys(errors).length === 0) {
      axios
        .post("https://health-savvy.onrender.com/api/client/login", formInputs)
        .then((response) => {
          console.log(response);
          navigate("/requestAppointment");
        })
        .catch((error) => {
          console.log(error);
          setFormErrors({
            ...formErrors,
            password: "Invalid email or password",
          });
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <div class="registration-form">
        <form onSubmit={handleFormSubmit}>
          <div class="form-icon">
            <span>
              <AiOutlineUser style={{ fontSize: "40px" }} />{" "}
            </span>
          </div>
          <div class="form-group">
            <input
              type="email"
              class={`form-control item ${
                formErrors.email ? "is-invalid" : ""
              }`}
              id="email"
              name="email"
              placeholder="Enter email"
              value={formInputs.email}
              onChange={handleInputChange}
              required
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>
          <div class="form-group">
            <input
              type="password"
              className={`form-control item ${
                formErrors.password ? "is-invalid" : ""
              }`}
              id="password"
              name="password"
              placeholder="Enter password"
              value={formInputs.password}
              onChange={handleInputChange}
              required
            />
            {formErrors.password && (
              <div className="invalid-feedback">{formErrors.password}</div>
            )}
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-block create-account">
              Login
            </button>
          </div>
          <div className="text-center mt-3">
            <p
              style={{
                color: "grey",
                fontStyle: "italic",
                fontSize: "12px",
              }}
            >
              Don't have an account? <Link to="/signUp">Sign up here</Link>
            </p>
          </div>
        </form>

        <div class="social-media">
          <h5>Sign up with social media</h5>
          <div class="social-icons">
            <a href="#">
              <FaFacebookF />{" "}
            </a>
            <a href="#">
              <FcGoogle />{" "}
            </a>
            <a href="#">
              <AiOutlineTwitter />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountLogin;
