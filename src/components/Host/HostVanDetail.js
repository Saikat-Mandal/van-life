import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
function HostVanDetail() {
  const params = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [params.id]);

  return (
    <>
      <div className=" p-6 min-h-screen bg-orange-50">
        <Link className=" underline" to=".." relative="path">
          back to all vans
        </Link>

        {van ? (
          <div className=" bg-white">
            <div className="flex items-center justify-around p-6">
              <img className="h-28 w-28" src={van.imageUrl} alt="van-img" />
              <div>
                <div className={`van-type ${van.type} selected`}>
                  {van.type}
                </div>
                <h1 className="py-1 text-2xl font-semibold">{van.name}</h1>
                <p>${van.price}/day</p>
              </div>
            </div>
            <nav className=" flex gap-x-6 font-semibold p-6">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-btm" : null
                }
                to="."
                end
              >
                Details
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-btm" : null
                }
                to="photos"
              >
                Photos{" "}
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-btm" : null
                }
                to="pricing"
              >
                Pricing{" "}
              </NavLink>
            </nav>
            <Outlet context={[van, setVan]} />
          </div>
        ) : (
          <h1>loading...</h1>
        )}
      </div>
    </>
  );
}

export default HostVanDetail;
