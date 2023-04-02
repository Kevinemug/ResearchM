import React, { useState } from "react";
import "../styles/member.css";
import axios from "axios";
import Success from "./success";
import { AiOutlineUser } from "react-icons/ai";
import Footer from "./footer/footer";
import Nav from "./navigation/nav";

const Member = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [data, setData] = useState({
    location: {
      province: "",
      district: "",
      street: "",
      address: "",
    },
    license: null,
    pharmacyImage: null,
    profileImage: null,
    email: "",
    password: "",
    pharmacyName: "",
    pharmacistName: "",
    phoneNumber: "",
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
    formData.append("pharmacyImage", data.pharmacyImage);
    formData.append("profileImage", data.profileImage);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("pharmacyName", data.pharmacyName);
    formData.append("pharmacistName", data.pharmacistName);
    formData.append("phoneNumber", data.phoneNumber);
    try {
      const response = await axios.post(
        "https://health-savvy.onrender.com/api/register/pharmacy/",
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
        title="Apply For Pharmacy Membership"
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
              name="pharmacyName"
              value={data.pharmacyName}
              onChange={handleChange}
              placeholder="name of pharmacy"
              className="form-control item"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="inputEmail3"
              name="pharmacistName"
              value={data.pharmacistName}
              onChange={handleChange}
              placeholder="name of pharmacist"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="inputEmail3"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              placeholder="pharmacy phone number"
            />
          </div>
          <div class="form-group">
            upload pharmacy image
            <input
              type="file"
              class="form-control item"
              name="pharmacyImage"
              id="inputEmail3"
              onChange={handleFileChange}
            />{" "}
          </div>
          <div class="form-group">
            upload profile image
            <input
              type="file"
              class="form-control item"
              id="inputEmail3"
              placeholder="Email"
              name="profileImage"
              onChange={handleFileChange}
            />
          </div>
          <div class="form-group">
            upload pharmacy license
            <input
              type="file"
              class="form-control item"
              id="inputEmail3"
              name="license"
              onChange={handleFileChange}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="inputPassword3"
              value={data.location.province}
              name="province"
              onChange={handleLocationChange}
              placeholder="province"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="inputPassword3"
              onChange={handleLocationChange}
              value={data.location.district}
              name="district"
              placeholder="district"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="inputPassword3"
              onChange={handleLocationChange}
              value={data.location.street}
              name="street"
              placeholder="street"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control item"
              id="inputPassword3"
              onChange={handleLocationChange}
              value={data.location.address}
              name="address"
              placeholder="address"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control item"
              id="inputPassword3"
              onChange={handleChange}
              value={data.email}
              name="email"
              placeholder="email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control item"
              id="inputPassword3"
              placeholder="Password"
              value={data.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control item"
              id="inputPassword3"
              placeholder=" confirm password"
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
};

export default Member;
