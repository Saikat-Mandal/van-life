import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const [van, setVan] = useOutletContext();
  return (
    <div className="px-6 pb-4">
      <p>${van.price}/day</p>
    </div>
  );
}

export default HostVanPricing;
