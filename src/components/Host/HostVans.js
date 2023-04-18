import React, { useState, useEffect } from "react";
import { Server } from "miragejs";
import { Link } from "react-router-dom";
function HostVans() {
  // state for vans cards
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setArray(data.vans));
  }, []);

  return (
    <div className=" min-h-screen p-6">
      <h1 className=" text-3xl">Your listed vans</h1>
      <div className="py-6 flex flex-col md:items-center gap-y-4 ">
        {array.map((van) => (
          <Link to={`/host/vans/${van.id}`}>
            <div className="flex md:flex-col gap-x-4 bg-yellow-100 p-4 rounded-2xl">
              <img className=" w-12 md:w-60" src={van.imageUrl} alt="van-img" />
              <div>
                <h1 className="font-semibold">{van.name}</h1>
                <p>${van.price}/day</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HostVans;
