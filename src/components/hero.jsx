import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineReadMore } from "react-icons/md";
import Fade from "react-awesome-reveal";
import ".././styles/hero.css";

const Hero = ({ title, description, image, fn, link }) => {
  function handleClick() {
    window.scrollTo({
      top: 1000, // adjust this value to scroll to a different position
      behavior: "smooth", // smooth scrolling animation
    });
  }

  return (
    <>
      <div
        className="heroContainer"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="heroDescription">
          <p className="description animate__animated animate__flash">
            {title}{" "}
          </p>
          <p className=" descriptionb animate__animated animate__bounce">
            {description}
          </p>
        </div>
        <div className="btnContainer">
          {/* <Link to={link}>
            <button className="heroBtn animate__animated animate__bounce">
              {" "}
              Request Membership
            </button>
          </Link> */}

          <Fade right>
            <div className="heroBtnSpan">
              <AiFillTwitterCircle />
            </div>
          </Fade>
        </div>
        <div className="btnContainer">
          <button
            className="heroBtn animate__animated animate__bounce"
            onClick={handleClick}
          >
            {" "}
            Learn More{" "}
          </button>
          <Fade right>
            <div className="heroBtnSpan">
              <MdOutlineReadMore />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Hero;
