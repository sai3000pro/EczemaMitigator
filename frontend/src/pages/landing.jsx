import React from "react";
import Hero from "../components/Hero";
import EczemaStat from "../components/EczemaStat";
import SmartSkinProduct from "../components/Wearable";

const Landing = ({ onNavigate }) => {
  return (
    <>
      <Hero />

      <div className="flex flex-col md:flex-row p-6">
        {/* Left Column */}
        <div className="flex-1">
          <EczemaStat />
        </div>

        {/* Right Column */}
        <div className="flex-2">
          <SmartSkinProduct />
        </div>
      </div>

      <div className="flex items-center justify-center ml-110 mb-10">
        <button
          className="bg-blue-500 text-white px-10 py-5 text-lg rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => onNavigate("dashboard")}
        >
          Learn about YOUR stats
        </button>
      </div>
    </>
  );
};

export default Landing;
