import React from "react";
import ImageSlider from "./imageSlider";
import Nav from "./navigation/nav";
import Footer from "./footer/footer";
const Landing = () => {
  return (
    <>
      <Nav
        image="https://www.nghs.com/wp-content/uploads/2022/04/iStock-1217055991-hero-spring-2022_warm_optimized.jpg"
        title="Welcome "
        description="We Are Glad You Are Here!"
      />
      <Footer />
      {/* <ImageSlider className="overall" /> */}
    </>
  );
};

export default Landing;
