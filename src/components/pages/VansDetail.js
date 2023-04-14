import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function VansDetail() {
  const params = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  console.log(params);
  return (
    <>
      {/* <Navbar /> */}
      <div className=" min-h-screen flex justify-center items-center">
        {van ? (
          <div className="p-6 flex flex-col md:max-w-screen-lg">
            <img src={van.imageUrl} alt="van-img" className=" py-4" />
            <div className={`van-type ${van.type} selected`}>{van.type}</div>
            <h1 className="py-4">{van.name}</h1>
            <p className="py-4 text-3xl font-bold">${van.price}/day</p>
            <p>{van.description}</p>
            <button className=" px-6 py-2 my-5 bg-orange-500 text-white">
              Rent this van
            </button>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default VansDetail;
