import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../helpers/axiosInstance";

const Updateuser = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  let [userData, setUserData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    uname: "",
  });

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

  let [users, setUsers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/user/${id}`)
      .then(x => setUserData(x.data))
      .catch(err => err);
  }, []);

  let handleUpdate = e => {
    e.preventDefault();
    console.log(userData);

    axiosInstance.put(`/user/${id}`, userData);
    console.log("successfully updated");
      navigate("/admindashboard/viewusers");
      toast.info(
        'user updated successfully!'
      )
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>USER UPDATE PAGE </h2>
        <div className="items">
          <label htmlFor="fname"> First Name :</label>
          <input
            value={userData.fname}
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
            value={userData.lname}
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
            value={userData.mobile}
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
            value={userData.email}
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
            value={userData.uname}
            required
            id="uname"
            type="text"
            name="uname"
            onChange={handleChange}
          />
        </div>

        <div className="items">
          <button onClick={handleUpdate}>UPDATE</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Updateuser;
