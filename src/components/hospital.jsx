import React, { useState } from "react";
import Hero from "./hero";
import { BsSearch } from "react-icons/bs";
import Fade from "react-awesome-reveal";
import HospitalCards from "./hospitalCards";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "./navigation/nav";
import ".././styles/hero.css";
import Footer from "./footer/footer";
const Hospital = () => {
  const [searchText, setSearchText] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [showTopSearches, setShowTopSearches] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `https://health-savvy.onrender.com/api/search/hospital?specialization=${searchText}`
        // { specialization: searchText }
      );
      setLoading(true);
      console.log(response);
      const data = response.data;

      setHospitals(data);
    } catch (error) {
      console.error(error);
    }
    setShowTopSearches(false);
    console.log(searchText);
    setLoading(true);
  };
  return (
    <>
      <Nav
        image="https://www.communicloud.com/wp-content/uploads/2021/12/Security-in-Healthcare.jpg"
        title="We Help"
        description="Patients Live a Healthy Longer Life!"
      />
      {/* <Hero
        title="Hospitals"
        description="Search For Hospitals Nearby"
        link="/hospitalForm"
      /> */}
      <div className="searchContainer">
        <div className="searchDescriptionContainer">
          <p className="searchDescription">
            See Nearby <strong>Hospitals</strong> specialized in your medical
            condition
          </p>
        </div>
        <div className="searchBoxContainter">
          <input
            type="text"
            className="searchBox"
            placeholder="Medical condition"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span>
            <BsSearch onClick={handleSearch} className="seric" />
          </span>{" "}
        </div>
      </div>
      <div className="top">
        <p className="topSearches">Top Searches</p>
      </div>
      <div className="hosCardsContainer">
        {hospitals.map((hospital) => (
          <HospitalCards
            key={hospital.id}
            hospitalName={hospital.hospitalName}
            hospitalKm={
              hospital.location.address +
              ", " +
              "  " +
              hospital.location.district
            }
            hospitalImg={hospital.hospitalImage}
          />
        ))}
        {hospitals.length === 0 && showTopSearches && (
          <>
            <HospitalCards
              hospitalName="H hospital"
              hospitalKm={3}
              hospitalImg="https://assets.contenthub.wolterskluwer.com/api/public/content/7f716e7ef5924f299571642e9e163166"
            />
            <HospitalCards
              hospitalName="Hope hospital"
              hospitalKm={2}
              hospitalImg="https://c8.alamy.com/comp/RATKP4/regions-hospital-building-showing-the-emergency-room-entrance-in-front-st-paul-minnesota-mn-usa-RATKP4.jpg"
            />
            <HospitalCards
              hospitalName="M hospital"
              hospitalKm={1}
              hospitalImg="https://www.mtxcontracts.co.uk/wp-content/uploads/2022/07/John-Radcliffe-Hospital_External.jpg"
            />
            <HospitalCards
              hospitalName="Rise hospital"
              hospitalKm={4}
              hospitalImg="https://cdn.systematic.com/media/g0sj1tbg/hospital-building-001-global.jpg?mode=crop&width=1200&height=630&center="
            />
            <HospitalCards
              hospitalName="Love hospital"
              hospitalKm={7}
              hospitalImg="https://ccountync.com/wp-content/uploads/2020/02/Carteret-Health-Care-Morehead-1.jpg"
            />
            <HospitalCards
              hospitalName="GHK hospital"
              hospitalKm={6}
              hospitalImg="http://whitearkitekter.com/wp-content/uploads/2017/10/Nya-Karolinska-S-White-Arkitekter-c-16.9.jpg"
            />{" "}
          </>
        )}
        {hospitals.length === 0 && !showTopSearches && (
          <div className="alert alert-danger shadow" role="alert">
            Sorry, we couldn't find what you are looking for.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Hospital;
