import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../helpers/axiosInstance";
import { toast } from "react-toastify";

const Userlogin = () => {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();

  let navigate = useNavigate();

  let handleSubmit = e => {
    e.preventDefault();

    axiosInstance.get("/user").then(x => {
      let data = x.data;
      let info = data.find(x => {
        return x.uname == username && x.password == password;
      });

      if (info) {
        toast.success(`${username} logged in successfully`);
        navigate("/");
      } else {
        toast.error("invalid username or password ");
        navigate("/userlogin");
      }
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>USER LOGIN</h2>
        <div className="items">
          <label htmlFor="username"> USERNAME</label>
          <input
            id="username"
            type="text"
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="items">
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="text"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="items">
          <button>LOGIN </button>
          <button>CANCEL</button>
        </div>
        <div className="items">
          <Link to="/usersignup">New user ? create an account </Link>
        </div>
      </form>
    </div>
  );
};

export default Userlogin;
