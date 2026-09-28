import React from "react";
import { Outlet } from "react-router-dom";

const AdminMain = () => {
  return (
    <div id="adminmain">
      <Outlet />
    </div>
  );
};

export default AdminMain;
