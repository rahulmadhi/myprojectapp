import React, { useState } from "react";

const Admin = () => {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();

  let handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
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
      </form>
    </div>
  );
};

export default Admin;
