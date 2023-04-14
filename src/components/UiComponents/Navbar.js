import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <header
        className=" flex p-6 justify-between"
        style={{ background: "#FFF7ED" }}
      >
        <h1 className=" text-xl font-bold">#VANLIFE</h1>
        <ul className="flex gap-x-6 ">
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Vans
          </NavLink>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
