import React, { useState } from "react";
import axios from "axios";
import Success from "./success";
import { AiOutlineUser } from "react-icons/ai";
import Footer from "./footer/footer";
import Nav from "./navigation/nav";
import "../styles/member.css";
function HospitalForm() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [data, setData] = useState({
    location: {
      province: "",
      district: "",
      street: "",
    },
    license: null,
    hospitalImage: null,
    email: "",
    password: "",
    hospitalName: "",
    phoneNumber: "",
    specialization: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSpecializationChange = (event) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      specialization: [value], // store value as an array
    }));
  };
  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        [name]: value,
      },
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submiting..");
    const formData = new FormData();
    formData.append("location[province]", data.location.province);
    formData.append("location[district]", data.location.district);
    formData.append("location[street]", data.location.street);
    formData.append("location[address]", data.location.address);
    formData.append("license", data.license);
    formData.append("hospitalImage", data.hospitalImage);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("hospitalName", data.hospitalName);
    formData.append("phoneNumber", data.phoneNumber);
    // Use forEach to add each specialization value as an array
    data.specialization.forEach((value) => {
      formData.append("specialization[]", value);
    });
    try {
      const response = await axios.post(
        "https://health-savvy.onrender.com/api/register/hospital/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setShowSuccessPopup(true);
  };

  return (
    <>
      <Nav
        title="Apply For Hospital Membership"
        description="Together we can make the world a better place !"
        image="https://images.ctfassets.net/19dvw6heztyg/61Wiw0rPAAhXO5QYvTE9Ho/1b172b9fba19e3a0354261d78b5840ae/membership-model.jpg?w=1440&q=75"
      />
      <div class="registration-form">
        <form onSubmit={handleSubmit}>
          <div>Apply for member ship </div>
          <div class="form-icon">
            <span>
              <AiOutlineUser style={{ fontSize: "40px" }} />{" "}
            </span>
          </div>

          <div class="form-group">
            <input
              type="text"
              name="hospitalName"
              value={data.hospitalName}
              onChange={handleChange}
              placeholder="name of hospital"
              className="form-control item"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="specialization"
              value={data.specialization}
              onChange={handleSpecializationChange}
              className="form-control item"
              placeholder=" hospital splecialization"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              name="province"
              value={data.location.province}
              onChange={handleLocationChange}
              id="inputEmail3"
              placeholder="province"
              className="form-control item"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="street"
              value={data.location.street}
              onChange={handleLocationChange}
              className="form-control item"
              placeholder="street"
            />{" "}
          </div>
          <div class="form-group">
            <input
              type="text"
              name="district"
              value={data.location.district}
              onChange={handleLocationChange}
              class="form-control item"
              placeholder="district"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="address"
              value={data.location.address}
              onChange={handleLocationChange}
              className="form-control item"
              placeholder="popular nearby place"
            />
          </div>
          <div class="form-group">
            Upload license
            <input
              type="file"
              name="license"
              onChange={handleFileChange}
              class="form-control item"
              placeholder="upload your license"
            />
          </div>
          <div class="form-group">
            Upload hospital Image
            <input
              type="file"
              name="hospitalImage"
              onChange={handleFileChange}
              className="form-control item"
              placeholder="upload hospital image"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="hospital email"
              className="form-control item"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="create password"
              className="form-control item"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder=" confirm password"
              className="form-control item"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              placeholder="phone number"
              className="form-control item"
            />
          </div>
          {showSuccessPopup && (
            <Success description=" Your Application for membership have been received successfully!we will reach out to you as soon as possible!" />
          )}

          <div class="form-group">
            <button type="submit" class="btn btn-block create-account">
              request membership
            </button>
          </div>
          <div className="text-center mt-3">
            <p
              style={{
                color: "grey",
                fontStyle: "italic",
                fontSize: "12px",
              }}
            >
              We will never share your information with anyone else{" "}
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default HospitalForm;
