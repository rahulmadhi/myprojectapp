import React from "react";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div id="adminsidebar">
      <h2>ADMIN DASHBOARD</h2>
      <div>
        <Link to={"/viewproducts"}>VIEW PRODUCTS</Link>
      </div>
      <div>
        <Link to={"/viewusers"}>VIEW USERS</Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
