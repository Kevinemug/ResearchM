import React from "react";
import Create from "./create";
import Login from "./login";
import LoginAdmin from "./loginAdmin";
import Footer from "./footer/footer";
import Nav from "./navigation/nav";
const Profile = () => {
  return (
    <>
      <Nav
        image="https://st2.depositphotos.com/2309453/9852/i/950/depositphotos_98520278-stock-photo-smiling-woman-looking-down-at.jpg"
        title="Login or SignUp  "
        description=" For a better user experience!"
      />
      <div>
        <LoginAdmin />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
