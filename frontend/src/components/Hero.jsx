import React from "react";
import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <div
      className="relative max-w-8xl mx-auto px-4 h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text content */}
      <div className="relative flex h-full items-center justify-center text-white text-3xl font-bold">
        Stay Ahead of Flareups. Stay&nbsp;<em>Comfortable</em>.
      </div>
    </div>
  );
};

export default Hero;
