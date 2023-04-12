import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header
      className=" flex p-6 justify-between"
      style={{ background: "#FFF7ED" }}
    >
      <h1 className=" text-xl font-bold">#VANLIFE</h1>
      <ul className="flex gap-x-6 ">
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        <Link to="/about" className="cursor-pointer">
          About
        </Link>
        <Link to="/vans" className="cursor-pointer">
          Vans
        </Link>
      </ul>
    </header>
  );
}

export default Navbar;
