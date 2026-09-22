import React, { useState } from "react";
import { Link } from "react-router-dom";

const Userlogin = () => {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();

  let handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
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
