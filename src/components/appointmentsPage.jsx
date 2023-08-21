import React from "react";
import AppointmentsMenu from "./appointmentsMenu";
import Speciality from "./speciality";
import Nav from "./navigation/nav";
import Footer from "./footer/footer";

const AppointmentsPage = () => {
  return (
    <>
      <Nav
        image="https://previews.123rf.com/images/azrisuratmin/azrisuratmin1605/azrisuratmin160500102/57160118-medical-concept-doctor-appointment-word-written-on-blackboard-with-stethoscope-on-wood-background.jpg"
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
