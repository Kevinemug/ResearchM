import React from "react";
import AppointmentsMenu from "./appointmentsMenu";
import Speciality from "./speciality";
import Nav from "./navigation/nav";
import Footer from "./footer/footer";

const AppointmentsPage = () => {
  return (
    <>
      <Nav
        image="https://www.yashodahealthcare.com/book-an-appointment/images/1612959243_book.webp"
        title="Book an Appointment "
        description=" with recoganized doctors and nurses In less than a few seconds"
      />
      {/* <AppointmentsMenu /> */}
      <Speciality />
      <Footer />
    </>
  );
};

export default AppointmentsPage;
