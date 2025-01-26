import React from "react";
import logo from "../assets/danger.png";

// change colours probably

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={logo}
              alt="SmartSkin"
            />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              SmartSkin
            </span>
            <div className="md:ml-auto">
              <div className="flex space-x-4">
                <p>The Product, Dashboard, Ask AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
