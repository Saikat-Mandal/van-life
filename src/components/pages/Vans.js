import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./server.js";
function Vans() {
  // state for vans cards
  const [array, setArray] = useState([]);

  // use params for type

  const [searchParams, setUseParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setArray(data.vans));
  }, []);

  const newVansArray = typeFilter
    ? array.filter((vans) => {
        return vans.type === typeFilter;
      })
    : array;

  // console.log(array);
  return (
    <>
      {/* <Navbar /> */}
      <div className=" bg-orange-50 min-h-screen">
        <h1 className=" font-extrabold text-3xl md:text-5xl text-center py-6">
          Explore our van options
        </h1>
        <div className=" flex items-start justify-center">
          <div className="flex gap-x-3 items-center cursor-pointer">
            <button
              onClick={() => setUseParams({ type: "simple" })}
              className=" px-4 py-2 rounded-full bg-orange-100"
            >
              Simple
            </button>
            <button
              onClick={() => setUseParams({ type: "luxury" })}
              className=" px-4 py-2 rounded-full bg-orange-100"
            >
              Luxury
            </button>
            <button
              onClick={() => setUseParams({ type: "rugged" })}
              className=" px-4 py-2 rounded-full bg-orange-100"
            >
              Rugged
            </button>
            <button onClick={() => setUseParams({})}>Clear filters</button>
          </div>
        </div>
        <div className=" my-grid">
          {newVansArray.map((item) => (
            <Link
              to={item.id}
              state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter,
              }}
            >
              <div key={item.id}>
                <img
                  className=" rounded-md"
                  src={item.imageUrl}
                  alt="van-img"
                />
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
    </>
  );
}

export default Vans;
