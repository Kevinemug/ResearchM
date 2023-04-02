import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./fonts/icomoon/style.css";
import "./css/owl.carousel.min.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./js/jquery-3.3.1.min.js";
import "./js/popper.min.js";
import "./js/bootstrap.min.js";
import "./js/jquery.sticky.js";
import "./js/main.js";
import "./css/nav.css";
import { MdHealthAndSafety } from "react-icons/md";
import Hero from "../hero";

import MyComponent from "./js/main.js";
const Nav = ({ image, title, description }) => {
  const [isClicked, setIsClicked] = useState(null);
  const handleClickk = (btnId) => {
    setIsClicked(btnId);
  };
  const getButtonClassName = (btnId) => {
    if (btnId === isClicked) {
      return "active";
    } else {
      return "";
    }
  };

  function handleClick() {
    window.scrollTo({
      top: 1000, // adjust this value to scroll to a different position
      behavior: "smooth", // smooth scrolling animation
    });
  }

  return (
    <>
      <MyComponent></MyComponent>
      <div class="site-mobile-menu">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <header class="site-navbar" role="banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-11 col-xl-2">
              <h1 class="mb-0 site-logo">
                <a
                  href="index.html"
                  class="text-white mb-0"
                  style={{
                    textShadow: "1px 1px 1px black",
                    color: "white",
                    fontSize: "30px",
                  }}
                >
                  <MdHealthAndSafety
                    style={{ fontSize: "50px", color: "dodgerblue" }}
                  />
                  HS
                </a>
              </h1>
            </div>
            <div class="col-12 col-md-10 d-none d-xl-block">
              <nav
                class="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
                  <li
                    class={getButtonClassName(0)}
                    onClick={() => handleClickk(0)}
                  >
                    <a href="">
                      <NavLink to="/">
                        {" "}
                        <span
                          style={{
                            textShadow: "1px 1px 1px black",
                            color: "white",
                          }}
                        >
                          Home
                        </span>
                      </NavLink>
                    </a>
                  </li>
                  <li className="has-children">
                    <NavLink
                      to="/hospital"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <a href="">
                        <span
                          style={{
                            textShadow: "2px 2px 2px #333",
                            color: "white",
                          }}
                        >
                          Hospitals
                        </span>
                        {/* </NavLink> */}
                      </a>
                    </NavLink>

                    <ul class="dropdown arrow-top">
                      <li>
                        <NavLink to="/hospitalForm">
                          <a href="">Request Membership</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          <a href="#" onClick={handleClick}>
                            Find Hospital
                          </a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          <a href="#">Menu Three</a>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <NavLink
                      to="/pharmacy"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <a href="/pharmacy">
                        {/* <NavLink
                          to="/hospital"
                          style={{ textDecoration: "none", color: "inherit" }}
                        > */}
                        <span
                          style={{
                            textShadow: "2px 2px 2px #333",
                            color: "white",
                          }}
                        >
                          Pharmacies
                        </span>
                        {/* </NavLink> */}
                      </a>
                    </NavLink>

                    <ul class="dropdown arrow-top">
                      <li>
                        <NavLink to="/memberShip">
                          <a href="">Request Membership</a>
                        </NavLink>
                      </li>
                      <li onClick={handleClick}>
                        <NavLink to="/pharmacy">
                          <a href="/">Find Pharmacy</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          <a href="#">Menu Three</a>
                        </NavLink>
                      </li>
                      <li class="has-children">
                        <a href="#">Dropdown</a>
                        <ul class="dropdown">
                          <li>
                            <a href="#">Menu One</a>
                          </li>
                          <li>
                            <a href="#">Menu Two</a>
                          </li>
                          <li>
                            <a href="#">Menu Three</a>
                          </li>
                          <li>
                            <a href="#">Menu Four</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <NavLink to="/nursary">
                      <a href="">
                        {/* <NavLink
                            to="/hospital"
                            style={{ textDecoration: "none", color: "inherit" }}
                          > */}
                        <span
                          style={{
                            textShadow: "2px 2px 2px #333",
                            color: "white",
                          }}
                        >
                          Services
                        </span>
                        {/* </NavLink> */}
                      </a>
                    </NavLink>
                    <ul class="dropdown arrow-top">
                      <li>
                        <NavLink>
                          <a href="" onClick={handleClick}>
                            Our services
                          </a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/appointmentsPage">
                          <a href="/">Find Private Doctor</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/appointmentsPage">
                          <a href="#">Find Private Nurse</a>
                        </NavLink>
                      </li>
                      <li class="has-children">
                        <a href="#">Request Membership</a>
                        <ul class="dropdown">
                          <li>
                            <NavLink to="/nursary/docMemberShip">
                              <a href="#">Doctor Membership</a>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="docMemberShip">
                              <a href="#">Nurse Membership</a>
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <li
                    class={getButtonClassName(6)}
                    onClick={() => handleClickk(6)}
                  >
                    <NavLink
                      to="/appointments"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <a href="">
                        <span
                          style={{
                            textShadow: "2px 2px 2px #333",
                            color: "white",
                          }}
                        >
                          Appointments
                        </span>
                      </a>
                    </NavLink>
                  </li> */}

                  <li
                    class={getButtonClassName(5)}
                    onClick={() => handleClickk(5)}
                  >
                    <NavLink to="/profile">
                      <a href="">
                        <span
                          style={{
                            textShadow: "2px 2px 2px #333",
                            color: "white",
                          }}
                        >
                          Profile
                        </span>
                      </a>
                    </NavLink>
                  </li>
                  <li
                    class={getButtonClassName(4)}
                    onClick={() => handleClickk(4)}
                  >
                    <a href="contact.html">
                      <span style={{ textShadow: "2px 2px 2px #333" }}>
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              class="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
              style={{ position: "relative", top: "3px" }}
            >
              <a href="#" class="site-menu-toggle js-menu-toggle text-white">
                <span class="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        class="hero"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="heroDescription">
          <Hero
            title={title}
            description={description}
            // image="https://as1.ftcdn.net/v2/jpg/02/81/21/10/1000_F_281211036_24KPea5poawt4mXYlEjRUwsCgomtjoVc.jpg"
          />

          {/* <p className="description animate__animated animate__flash">
            {title}{" "}
          </p>
          <p className=" descriptionb animate__animated animate__bounce">
            {description}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
