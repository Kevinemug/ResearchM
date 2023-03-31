import React, { useState } from "react";
import ".././styles/speciality.css";
import Fade from "react-awesome-reveal";
import DoctorNurseCards from "./doctorNurseCards";
import SpecialityCard from "./specialityCards";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const Speciality = () => {
  const [showTopSearches, setShowTopSearches] = useState(true);
  const [hospitals, setHospitals] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `https://health-savvy.onrender.com/api/search/doctor?specialization=${searchText}`
        // { specialization: searchText }
      );
      console.log(response);
      const data = response.data;

      setHospitals(data);
    } catch (error) {
      console.error(error);
    }
    setShowTopSearches(false);
    console.log(searchText);
  };

  return (
    <>
      <div className="appointmentSeachContainer">
        <div className="appParagraph">Find your doctor or nurse</div>
        <div className="appSearch">
          {" "}
          <AiOutlineSearch className="searchapp" onClick={handleSearch} />
          <input
            type="text"
            placeholder="search by medical condition"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="specialityHeader">
        <p className="speciality">specliality</p>
        <p className="view"> view all</p>
      </div>{" "}
      <div className="containerCard  animate__animated animate__bounce">
        <Fade cascade>
          <SpecialityCard title="Cardiologist" />
          <SpecialityCard title="Immunologist" />
          <SpecialityCard title="Dentist" />
          <SpecialityCard title="Generalist" />
        </Fade>
      </div>
      <div className="docnuContainer ">
        {hospitals.map((hospital) => (
          <DoctorNurseCards
            name={"Dr." + hospital.firstName + " " + hospital.lastName}
            field={hospital.phoneNumber}
            image="https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg"
          />
        ))}
      </div>
      {hospitals.length === 0 && showTopSearches && (
        <div className="three">
          <div className="one">
            <p className="top">Top Doctors</p>
            <div className="docnuContainer ">
              <Fade cascade>
                <DoctorNurseCards
                  name="Dr.Kex Markessy"
                  field="Cardiologist"
                  image="https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg"
                />
                <DoctorNurseCards
                  name="Dr.Jean Paul Ngoga"
                  field="Dermatologist"
                  image="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
                />
                <DoctorNurseCards
                  name="Dr.Teta Precious"
                  field="Immunologist"
                  image="https://www.doctorcare.ca/wp-content/uploads/2021/05/header-homepage-cropped.png"
                />
                <DoctorNurseCards
                  name="Dr.Linda Lesley"
                  field="Generalist"
                  image="https://i.pinimg.com/736x/1f/64/72/1f64724836e7eb60f24100ca9cad8bad.jpg"
                />
              </Fade>
            </div>
          </div>
          <div className="two">
            <p className="top">Top Nurses</p>
            <div className="docnuContainer">
              <Fade cascade>
                <DoctorNurseCards
                  name="nurse Mugisha Kevine"
                  field="Home nursing"
                  image="https://newhealthtimes.s3.amazonaws.com/uploads/article_images/Nursing%20student1619408015.jpg"
                />
                <DoctorNurseCards
                  name="nurse Nsenga Queen"
                  field="Home Physiotherapy"
                  image="https://careers.highmarkhealth.org/media/zi5j1buu/nursing_2023_small.jpeg?center=0.39619293982608,0.6370263783875626&mode=crop&width=720&height=540&mode=crop&quality=90"
                />
                <DoctorNurseCards
                  name="nurse Musime Richard"
                  field="In-Home care giver"
                  image="https://online-learning-college.com/wp-content/uploads/2022/05/How-to-Become-a-Nurse-.jpg"
                />
              </Fade>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Speciality;
