import React from "react";
import ImageSlider from "./imageSlider";
import Nav from "./navigation/nav";
import Footer from "./footer/footer";
import Why from "./why";
import Title from "./title";
import { Fade } from "react-awesome-reveal";
const Landing = () => {
  return (
    <>
      <Nav
        image="https://www.nghs.com/wp-content/uploads/2022/04/iStock-1217055991-hero-spring-2022_warm_optimized.jpg"
        title="Welcome "
        description="We Are Glad You Are Here!"
      />
      <Title title="Why Work With Us"/>
      <div className="whyContainer animate__animated animate__bounce">
        <Why title="Tired of long distances searching for medecine?" desc="We help you find pharmacies with the medecine you are looking for easily"/>
        <Why title="Cant find hospitals specialized in your medical condition?" desc="We help you find hospitals specialized in your medical condition with just a few clicks"/>
        <Why title="In need of a private doctor or a nurse to take care of you in your old days?" desc="We help you book appointments with recoganized doctors and nurses with just a few clicks"/>
        <Why title="Intrested in partnership with us?" desc="We accept applications from hospitals,pharmacies,doctors and nurses"/>

      </div>
      <Footer />
      {/* <ImageSlider className="overall" /> */}
    </>
  );
};

export default Landing;
