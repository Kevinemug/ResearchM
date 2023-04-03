import React from "react";
import "./fonts/icomoon/style.css";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./js/jquery-3.3.1.min.js";
import "./js/popper.min.js";
import "./js/bootstrap.min.js";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
  const handleClick = () => {

navigate("/contact")


  }
  return (
    <>
      <footer
        class="footer-20192"
        style={{ background: "#007bff", marginTop: "60px" }}
      >
        <div class="site-section" style={{ background: "#007bff" }}>
          <div class="container">
            <div
              class="cta d-block d-md-flex align-items-center px-5"
              style={{ background: "#43D5CB" }}
            >
              <div>
                <h2 class="mb-0">We Are ALways Looking To Improve </h2>
                <h3 class="text-dark">Any FeedBack?</h3>
              </div>
              <div class="ml-auto" onClick={handleClick}>
                                <a href="#" class="btn btn-dark rounded-0 py-3 px-5">
                                Contact us
                              </a>
              
                
                
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <a href="#" class="footer-logo">
                  Klab Team
                </a>
                <p class="copyright">
                  <small>&copy; 2023</small>
                </p>
              </div>
              <div class="col-sm">
                <h3>Customers</h3>
                <ul class="list-unstyled links">
                  <li>
                    <a href="#">Buyer</a>
                  </li>
                  <li>
                    <a href="#">Supplier</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm">
                <h3>Company</h3>
                <ul class="list-unstyled links">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm">
                <h3>Further Information</h3>
                <ul class="list-unstyled links">
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <h3>Follow us</h3>
                <ul class="list-unstyled social">
                  <li>
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-medium"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-paper-plane"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
