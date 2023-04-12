import React from "react";
import Navbar from "../UiComponents/Navbar";
import Footer from "../UiComponents/Footer";
import img from "../assets/homeImg.png";
function About() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen bg-orange-50">
        <img src={img} alt="vam" />
        <div className=" p-4">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className=" bg-orange-300 p-4 mt-16 md:flex md:flex-col justify-center items-center">
            <h1 className=" font-bold py-4">
              Your destination is waiting. Your van is ready.
            </h1>
            <button className=" bg-black text-white px-6 py-2 rounded-xl">
              Explore our vans
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
