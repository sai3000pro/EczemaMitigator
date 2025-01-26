import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching data from an API or sensor
      setTemperature(Math.floor(Math.random() * 30) + 15); // Random temperature between 15 and 45°C
      setHumidity(Math.floor(Math.random() * 40) + 40); // Random humidity between 40% and 80%
      setLastUpdated(new Date().toLocaleTimeString()); // Current time as the "last updated"
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
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
