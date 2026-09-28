import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../helpers/axiosInstance";

const Admin = () => {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [adminAuth, setAdminAuth] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/admin")
      .then(x => setAdminAuth(x.data))
      .catch(err => err);
  }, []);

  let handleSubmit = e => {
    e.preventDefault();

    let usernamedb = adminAuth[0].username;
    let pwddb = adminAuth[0].password;

    if (username == usernamedb && password == pwddb) {
      toast.success("Admin logged in successfully");
      localStorage.setItem("token", true);
      navigate("/admindashboard");
    } else {
      toast.error("Please check admin credentials");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h2>ADMIN LOGIN</h2>
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
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="items">
          <button>LOGIN </button>
          <button>CANCEL</button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
