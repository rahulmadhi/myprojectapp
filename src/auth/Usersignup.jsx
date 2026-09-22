import React, { useState } from "react";
import { Link } from "react-router-dom";

const Usersignup = () => {
  let [userData, setUserData] = useState({});

  let handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>USER SIGNUP </h2>
        <div className="items">
          <label htmlFor="fname"> First Name :</label>
          <input id="fname" type="text" name="fname" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="lname"> Last Name :</label>
          <input id="lname" type="text" name="lname" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="mobile"> Mobile :</label>
          <input
            id="mobile"
            type="text"
            name="mobile"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="email"> Email :</label>
          <input id="email" type="text" name="email" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="uname"> Username :</label>
          <input id="uname" type="text" name="uname" onChange={handleChange} />
        </div>
        <div className="items">
          <label htmlFor="password"> Password :</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="items">
          <label htmlFor="cpassword"> Confirm Password :</label>
          <input
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
