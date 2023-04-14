import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./host.css";
function HostNavbar() {
  return (
    <>
      <nav className=" flex text-2xl gap-x-4 p-4 font-semibold">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link-host" : null)}
          end
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link-host" : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link-host" : null)}
          to="/host/income"
        >
          income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link-host" : null)}
          to="/host/vans"
        >
          vans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostNavbar;
