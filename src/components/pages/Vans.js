import React from "react";
import Navbar from "../UiComponents/Navbar";
import Footer from "../UiComponents/Footer";
function Vans() {
  return (
    <>
      <Navbar />
      <div className=" bg-orange-50">
        <h1 className=" font-extrabold text-3xl md:text-5xl text-center py-6">
          Explore our van options
        </h1>
        <div className=" min-h-screen flex items-start justify-center">
          <ul className="flex gap-x-3 items-center cursor-pointer">
            <li className=" px-4 py-2 rounded-full bg-orange-100">Simple</li>
            <li className=" px-4 py-2 rounded-full bg-orange-100">Luxury</li>
            <li className=" px-4 py-2 rounded-full bg-orange-100">Rugged</li>
            <p>Clear filters</p>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vans;
