import React, { useEffect, useState } from "react";
import AdminDashboard from "./auth/AdminDashboard";

const Home = () => {
  let [authToken, setAuthToken] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    setAuthToken(token);
    console.log(token);
  }, [authToken]);

  return <div>HOME</div>;
};

export default Home;
