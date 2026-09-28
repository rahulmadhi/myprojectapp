import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import STYLE from "./resources/nav.module.css";

const Nav = () => {
  let navigate = useNavigate();
  let token = window.localStorage.getItem("token");

  return (
    <div id={STYLE.navbar}>
      <div>
        <Link to={"/"}>
          <img
            src="https://cdn.dribbble.com/userupload/17039933/file/original-dbbc84c08bd6b4b49fc97827fa5be468.jpg?resize=752x&vertical=center"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to={"/adminlogin"}>ADMIN</Link>
        <Link to={"/userlogin"}>USER</Link>
        {token == "true" ? (
          <button
            onClick={() => {
              localStorage.clear();
              window.location.assign("/");
            }}
          >
            LOGOUT
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Nav;
