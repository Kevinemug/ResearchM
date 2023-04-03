import React from "react";
import Nav from "./navigation/nav";
import Footer from "./footer/footer";
import Feedback from "./feedback";
const Contact = () => {
  return (
    <>
      <Nav
        title="Help Us Improve "
        description="Your FeedBack Means The World To Us !"
        image="https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg"
      />
          <Feedback/>

      <Footer />
    </>
  );
};

export default Contact;
