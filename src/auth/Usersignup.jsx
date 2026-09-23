import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../helpers/axiosInstance";

const Usersignup = () => {
  let navigate = useNavigate();
  let [userData, setUserData] = useState({});

  let handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    let payload = userData;
    axiosInstance.post("/user", payload);
    toast.success(`Registration successfull`);
    navigate("/userlogin");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>USER SIGNUP </h2>
        <div className="items">
          <label htmlFor="fname"> First Name :</label>
          <input
            required
            id="fname"
            type="text"
            name="fname"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="lname"> Last Name :</label>
          <input
            required
            id="lname"
            type="text"
            name="lname"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="mobile"> Mobile :</label>
          <input
            required
            id="mobile"
            type="text"
            name="mobile"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="email"> Email :</label>
          <input
            required
            id="email"
            type="text"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="uname"> Username :</label>
          <input
            required
            id="uname"
            type="text"
            name="uname"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="password"> Password :</label>
          <input
            required
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="cpassword"> Confirm Password :</label>
          <input
            required
            id="cpassword"
            type="password"
            name="cpassword"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <button>Create Account</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Usersignup;
