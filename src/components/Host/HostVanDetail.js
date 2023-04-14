import React, { useState, useEffect } from "react";

function HostVanDetail() {
  // state for vans cards
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setArray(data.vans));
  }, []);
  return (
    <div className=" p-6">
      <h1 className=" p-4">this is host van details</h1>

      <div></div>
    </div>
  );
}

export default HostVanDetail;
