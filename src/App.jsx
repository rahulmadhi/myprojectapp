import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Admin from "./auth/Admin";
import Userlogin from "./auth/Userlogin";
import Usersignup from "./auth/Usersignup";
import { ToastContainer, toast } from "react-toastify";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./auth/AdminDashboard";
import Viewproducts from "./Viewproducts";
import Viewusers from "./resources/Viewusers";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<Admin />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />

          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/usersignup" element={<Usersignup />} />
          <Route path="/viewproducts" element={<Viewproducts />} />
          <Route path="/viewusers" element={<Viewusers />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
