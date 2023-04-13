import React, { useEffect, useState } from "react";
import Navbar from "../UiComponents/Navbar";
import "./server.js";
import Footer from "../UiComponents/Footer";
function Vans() {
  // state for vans cards
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setArray(data.vans));
  }, []);

  console.log(array);
  return (
    <>
      <Navbar />
      <div className=" bg-orange-50 min-h-screen">
        <h1 className=" font-extrabold text-3xl md:text-5xl text-center py-6">
          Explore our van options
        </h1>
        <div className=" flex items-start justify-center">
          <ul className="flex gap-x-3 items-center cursor-pointer">
            <li className=" px-4 py-2 rounded-full bg-orange-100">Simple</li>
            <li className=" px-4 py-2 rounded-full bg-orange-100">Luxury</li>
            <li className=" px-4 py-2 rounded-full bg-orange-100">Rugged</li>
            <p>Clear filters</p>
          </ul>
        </div>
        <div className=" my-grid">
          {array.map((item) => (
            <div key={item.id}>
              <img className=" rounded-md" src={item.imageUrl} alt="van-img" />
              <div className=" flex items-center justify-between font-bold">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div className={`van-type ${item.type} selected`}>
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vans;
