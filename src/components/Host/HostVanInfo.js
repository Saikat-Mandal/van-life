import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const [van, setVan] = useOutletContext();
  return (
    <div className="px-6 pb-4 flex flex-col gap-y-4">
      <p>
        <strong>Name : </strong>
        {van.name}
      </p>
      <p>
        <strong>Category :</strong> {van.type}
      </p>
      <p>
        <strong>Description :</strong> {van.description}
      </p>
    </div>
  );
}

export default HostVanInfo;
