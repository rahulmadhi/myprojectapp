import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminMain from "./AdminMain";

const AdminDashboard = () => {
  return (
    <div id="admindashboard">
      <AdminSidebar />
      <AdminMain />
    </div>
  );
};

export default AdminDashboard;
