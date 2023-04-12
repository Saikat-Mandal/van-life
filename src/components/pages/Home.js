import React from "react";

import "./home.css";
import Navbar from "../UiComponents/Navbar";
import Footer from "../UiComponents/Footer";
function Home() {
  return (
    <div>
      <Navbar />

      <main className="justify-center items-center flex">
        <div className="text-white w-80 md:w-6/12 flex flex-col md:justify-center md:items-center gap-8">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            You got the travel plans, we got the travel vans.
          </h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="px-6 py-2 bg-orange-300 rounded-xl">
            Find your van
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
