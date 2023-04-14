import React, { useState, useEffect } from "react";
import { Server } from "miragejs";
import { Link } from "react-router-dom";
function HostVans() {
  // state for vans cards
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setArray(data.vans));
  }, []);
  return (
    <div className=" min-h-screen p-6">
      <h1 className=" text-3xl">Your listed vans</h1>
      <div className=" my-grid">
        {array.map((item) => (
          <Link to={`/host/vans/${item.id}`}>
            <div key={item.id}>
              <img className=" rounded-md" src={item.imageUrl} alt="van-img" />
              <div className=" flex items-center justify-between font-bold py-4">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
              <div className={`van-type ${item.type} selected`}>
                {item.type}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HostVans;
