import React from "react";
import ".././styles/appointments.css";
import { BiMenuAltLeft } from "react-icons/bi";
const AppointmentsMenu = () => {
  return (
    <>
      <div>
        <div className="appointmentIconwel">
          <div className="appointmentsMenuIcon">
            <BiMenuAltLeft className="appIccon" />
          </div>
          <div className="appWelcome">Welcome</div>
        </div>
      </div>

    </>
  );
};

export default AppointmentsMenu;
