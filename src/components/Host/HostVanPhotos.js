import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const [van, setVan] = useOutletContext();
  return (
    <div className=" px-6 pb-4 md:w-72 ">
      <img src={van.imageUrl} alt="van-img" />
    </div>
  );
}

export default HostVanPhotos;
