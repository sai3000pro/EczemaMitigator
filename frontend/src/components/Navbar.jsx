import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ onNavigate, currentPage }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={logo}
              alt="SmartSkin"
            />
            <span className="hidden md:block text-2xl font-bold ml-2 text-blue-800">
              SmartSkin
            </span>
            <div className="md:ml-auto">
              <div className="flex space-x-6">
                {/* Navigation buttons */}
                <button
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition duration-200 ${
                    currentPage === "landing"
                      ? "bg-blue-500 text-white"
                      : "text-blue-500 hover:bg-blue-100"
                  }`}
                  onClick={() => onNavigate("landing")}
                >
                  Home
                </button>
                <button
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition duration-200 ${
                    currentPage === "dashboard"
                      ? "bg-blue-500 text-white"
                      : "text-blue-500 hover:bg-blue-100"
                  }`}
                  onClick={() => onNavigate("dashboard")}
                >
                  Dashboard
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
