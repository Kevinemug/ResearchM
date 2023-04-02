import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../components/account/assets/css/style.css";
// import "./assets/css/style1.css";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Success from "./success";
import Footer from "./footer/footer";
import Nav from "./navigation/nav";

const SignUp = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
    if (formInputs.firstName.length < 3) {
      errors.firstName = "Enter you first name correctly";
    }
    if (formInputs.lastName.length < 3) {
      errors.lastName = "Enter you last  name correctly";
    }
    if (Object.keys(errors).length === 0) {
      axios
        .post(
          "https://health-savvy.onrender.com/api/client/createAccount",
          formInputs
        )
        .then((response) => {
          console.log(response);
          //   <Success description="you have successfully created an account" />;
          alert("Account created successfully,you can now login!");
          navigate("/log");
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
      <Nav
        image="https://st2.depositphotos.com/2309453/9852/i/950/depositphotos_98520278-stock-photo-smiling-woman-looking-down-at.jpg"
        title="Login or SignUp  "
        description=" For a better user experience!"
      />

      <div class="registration-form">
        <form onSubmit={handleFormSubmit}>
          <div class="form-icon">
            <span>
              <AiOutlineUser style={{ fontSize: "40px" }} />{" "}
            </span>
          </div>
          <div class="form-group">
            <input
              type="text"
              className={`form-control item ${
                formErrors.firstName ? "is-invalid" : ""
              }`}
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              value={formInputs.firstName}
              onChange={handleInputChange}
              required
            />
            {formErrors.firstName && (
              <div className="invalid-feedback">{formErrors.firstName}</div>
            )}
          </div>
          <div class="form-group">
            <input
              type="text"
              className={`form-control item ${
                formErrors.lastName ? "is-invalid" : ""
              }`}
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              value={formInputs.lastName}
              onChange={handleInputChange}
              required
            />
            {formErrors.lastName && (
              <div className="invalid-feedback">{formErrors.lastName}</div>
            )}
          </div>
          <div class="form-group">
            <input
              type="email"
              className={`form-control item ${
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
              className={`form-control item${
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
              Create Account
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
              Already have an account? <Link to="/log">login here</Link>
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
      <Footer />
    </>
  );
};

export default SignUp;
