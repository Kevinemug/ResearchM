import React, { useState } from "react";
import Hero from "./hero";
import Search from "./search";
import PharmaCard from "./pharmaCard";
import { NavLink, Link } from "react-router-dom";
import Member from "./member";
import { BsSearch } from "react-icons/bs";
import HospitalCards from "./hospitalCards";
import axios from "axios";
import Nav from "./navigation/nav";
import Footer from "./footer/footer";

const Pharmacy = () => {
  const [showContainer, setShowContainer] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [showTopSearches, setShowTopSearches] = useState(true);
  const [data, setData] = useState(null);
  const handleButtonClick = () => {
    setShowContainer(!showContainer);
  };
  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `https://health-savvy.onrender.com/api/search/medicine?medicine=${searchText}`
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
      <Nav
        image="https://www.universityofcalifornia.edu/sites/default/files/generic-drugs-istock.jpg"
        title="Pharmacy"
        description="We are Less Than 1 KM Away!"
      />

      {/* <Hero
        title="Pharmacy"
        description="We are Less Than 1 KM Away!"
        image="https://www.universityofcalifornia.edu/sites/default/files/generic-drugs-istock.jpg"
        onClick={handleButtonClick}
        link="/memberShip"
      />
 */}
      <div className="searchContainer">
        <div className="searchDescriptionContainer">
          <p className="searchDescription">
            See Nearby <strong>Pharmacies</strong> with the medecine you are
            looking for
          </p>
        </div>
        <div className="searchBoxContainter">
          <input
            type="text"
            className="searchBox"
            placeholder="Medecine name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span>
            <BsSearch onClick={handleSearch} className="seric" />
          </span>{" "}
        </div>
      </div>
      <p className="topSearches" style={{ marginLeft: "20px" }}>
        Top Seaches
      </p>
      <div className="containerPharma">
        {hospitals.map((hospital) => (
          <PharmaCard
            key={hospital.id}
            // hospitalName={hospital.pharmacy.pharmacyName}
            location="Located at Kigali,Kicukiro KN 5 rd"
            img={hospital.medicineImage}
            medicineName={hospital.pharmacy.pharmacyName}
          />
        ))}
        {hospitals.length === 0 && showTopSearches && (
          <>
            <PharmaCard
              img="https://images.ctfassets.net/lnbo4srla2av/2FLShzxAxG1INtclSxoG1e/e7a6adf34ed49217173d8d31680cf88e/OCP-pill-pack--pharmacy-page--mobile.png?q=90"
              medicineName="Birth Control Pills"
            />
            <PharmaCard
              img="https://images.ctfassets.net/lnbo4srla2av/Y9xn9RSWcn4seERXX8UWw/c268b3198c47ca124f69f8eaf9750699/carousel-generic-box-title.png?q=90"
              medicineName="Amoxy"
            />
            <PharmaCard
              img="https://www.dailychemist.com/wp-content/uploads/2020/03/para500.jpg"
              medicineName="Paracetamol denk"
            />
            <PharmaCard
              img="https://homehealth-uk.com/wp/wp-content/uploads/crescent-paracetamol-box-pills.jpg"
              medicineName="Paracetamol"
            />
            <PharmaCard
              img="https://homehealth-uk.com/wp/wp-content/uploads/crescent-paracetamol-box-pills.jpg"
              medicineName="Paracetamol"
            />
            <PharmaCard
              img="https://homehealth-uk.com/wp/wp-content/uploads/crescent-paracetamol-box-pills.jpg"
              medicineName="Paracetamol"
            />
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

export default Pharmacy;
