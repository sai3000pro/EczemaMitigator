import React from "react";
import wearable from "../assets/wearable.png";

const SmartSkinProduct = () => {
  return (
    <div className="bg-lightblue-200 p-6 rounded-lg shadow-lg w-full mx-1">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold text-blue-800">
        Take control of your skin health like never before.
      </h2>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src={wearable}
          alt="SmartSkin Wearable"
          className="w-64 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-center">
        <p className="text-gray-700 mb-6">
          SmartSkin is a revolutionary wearable designed to help you stay one
          step ahead of environmental triggers, empowering you to live
          comfortably and confidently. With real-time monitoring and
          personalized insights, SmartSkin makes managing sensitive skin
          effortless.
        </p>
      </div>
    </div>
  );
};

export default SmartSkinProduct;
