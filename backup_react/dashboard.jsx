import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Fetch temperature data
  const fetchTemperature = async () => {
    try {
      const response = await fetch("http://localhost:8000/temperature");
      const data = await response.json();
      setTemperature(data.temperature);
    } catch (error) {
      console.error("Error fetching temperature data:", error);
    }
  };

  // Fetch humidity data
  const fetchHumidity = async () => {
    try {
      const response = await fetch("http://localhost:8000/humidity");
      const data = await response.json();
      setHumidity(data.humidity);
    } catch (error) {
      console.error("Error fetching humidity data:", error);
    }
  };

  useEffect(() => {
    // Fetch data every 5 seconds
    const interval = setInterval(() => {
      fetchTemperature();
      fetchHumidity();
      setLastUpdated(new Date().toLocaleTimeString());
    }, 5000);

    // Initial fetch
    fetchTemperature();
    fetchHumidity();

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Temperature Box */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Current Temperature</h2>
          <p className="text-lg text-gray-700">
            {temperature ? `${temperature}°C` : "Loading..."}
          </p>
          <p className="text-sm text-gray-500">As at {lastUpdated}</p>
        </div>

        {/* Humidity Box */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2">Humidity</h2>
          <p className="text-lg text-gray-700">
            {humidity ? `${humidity}%` : "Loading..."}
          </p>
          <p className="text-sm text-gray-500">As at {lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
