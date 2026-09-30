import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Admin from "./auth/Admin";
import Userlogin from "./auth/Userlogin";
import Usersignup from "./auth/Usersignup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./auth/AdminDashboard";
import Viewproducts from "./Viewproducts";
import Viewusers from "./Viewusers";
import Addproduct from "./Addproduct";
import Updateuser from "./auth/Updateuser";
const App = () => {
  return (
    <div>
      {/* <ToastContainer /> */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<Admin />} />
          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route path="viewproducts" element={<Viewproducts />} />
            <Route path="viewusers" element={<Viewusers />} />
            <Route path="addproducts" element={<Addproduct />} />
          </Route>
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/usersignup" element={<Usersignup />} />
          <Route path="/updateuser/:id" element={<Updateuser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
