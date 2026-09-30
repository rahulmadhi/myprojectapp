import React, { useEffect, useState } from "react";
import axiosInstance from "./helpers/axiosInstance";
import { useNavigate } from "react-router-dom";

const Viewusers = () => {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axiosInstance
      .get("/user")
      .then(x => setUsers(x.data))
      .catch(err => err);
  }, []);
  return (
    <div>
      <div id="container">
        {users.map(x => {
          return (
            <div id="cards">
              <img
                style={{ height: "200px", width: "200px" }}
                src={`https://api.dicebear.com/10.x/lorelei/svg?seed=user-${x.uname}`}
                alt=""
              />
              <h2 style={{ color: "red" }}>{x.id}</h2>
              <h3>Name :{x.uname}</h3>
              <h3>Phone : {x.mobile}</h3>
              <h3>{x.email}</h3>
              <div>
                <button
                  onClick={() => {
                    navigate(`/updateuser/${x.id}`);
                    console.log(x.id);
                  }}
                >
                  EDIT
                </button>
                <button>DELETE</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Viewusers;
