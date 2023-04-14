import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className=" min-h-screen">
      <h1>this is Dashboard</h1>
      <Outlet />
    </div>
  );
}

export default Dashboard;
