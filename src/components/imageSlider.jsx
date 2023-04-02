import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./navigation/nav";

import Hero from "./hero";
function ImageSlider() {
  const images = ["hello", "goodbye", "and everything in between"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="overall">
        <Slider {...settings} className="overall">
          <Nav
            image="https://www.universityofcalifornia.edu/sites/default/files/generic-drugs-istock.jpg"
            title="Pharmacy"
            description="We are Less Than 1 KM Away!"
          />
          <Nav
            image="https://www.communicloud.com/wp-content/uploads/2021/12/Security-in-Healthcare.jpg"
            title="Hospitals"
            description="Search For Hospitals Nearby"
          />
          <Nav
            title="Services"
            description="Taking Care Of You Is Our Top Priority"
            image="https://www.elsevier.com/__data/assets/image/0019/1034461/HomeHealthcare-1.jpg"
          />
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
