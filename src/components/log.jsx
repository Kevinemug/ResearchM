import React from "react";
import LoginForm from "./signIn";
import "../styles/log.css";
import AccountLogin from "./account/login";
import Footer from "./footer/footer";
import Nav from "./navigation/nav";
const Log = () => {
  return (
    <>
      <Nav
        image="https://st2.depositphotos.com/2309453/9852/i/950/depositphotos_98520278-stock-photo-smiling-woman-looking-down-at.jpg"
        title="Login or SignUp  "
        description=" For a better user experience!"
      />
      {/* <div className="overlayStyles"></div>
      <div className="popupStyles "> 
      {/* <LoginForm /> */}
      <AccountLogin />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Log;
