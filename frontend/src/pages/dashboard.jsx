import React, { useState, useEffect } from "react";
import axios from "axios";
import eczemaHand from "../assets/eczema_hand.jpg";

const Dashboard = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/temperature")
        .then (response => {

          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data);
          }
  
          console.log('Parsed Response:', response.data); // Log the parsed response
  
          const temperature = response.data.temperature;
          const humidity = response.data.humidity;
          console.log(`Current temperature: ${temperature}`);
          console.log(`Current humidity: ${humidity}`);
  
          setTemperature(temperature);
          setHumidity(humidity);
          setLastUpdated(new Date().toLocaleTimeString());
        })} catch (error) {
        console.error('Error fetching temperature:', error);
      }
    }
    

    fetchData();
    const interval = setInterval(() => {
      // Simulate fetching data from an API or sensor
      fetchData();
     
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  const getRiskLevel = (tempC) => {
    if (tempC < -10) {
      return 9;
    } else if (tempC >= -10 && tempC < -5) {
      return 8;
    } else if (tempC >= -5 && tempC < 0) {
      return 7;
    } else if (tempC >= 0 && tempC < 5) {
      return 6;
    } else if (tempC >= 5 && tempC < 10) {
      return 5;
    } else if (tempC >= 10 && tempC < 15) {
      return 4;
    } else if (tempC >= 15 && tempC < 20) {
      return 3;
    } else {
      return 2;
    }
  };
  
  const getRiskLevelText = (tempC) => {
    const riskLevel = getRiskLevel(tempC);
    const riskLevelText = [
      "Very High Risk",
      "High Risk",
      "Moderate Risk",
      "Low Risk",
      "Very Low Risk",
      "Minimal Risk",
      "Negligible Risk",
      "Insignificant Risk",
      "No Risk"
    ];

    return riskLevelText[9 - riskLevel];
  };


  
  



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
          {temperature ? `${temperature} °C` : "Loading..."}
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

     {/* Flare up Risk Box */}
      <div className="flex justify-center items-center mt-6 w-full">
        <div className="bg-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Flare up Risk</h2>
          <p className="text-xl text-gray-700">

          {temperature !== null ? `Risk Level: ${getRiskLevel(temperature)}, ${getRiskLevelText(temperature)}` : "Loading..."}
          </p>
          <p className="text-md text-gray-500">As at {lastUpdated}</p>
        </div>
        <div className="flex-shrink-0 ml-4">
        
    </div>
      </div>
      <img src={eczemaHand} alt="Description of image" className="w-54 h-54 ml-10" />

</div>
</div>
      );
}

export default Dashboard;
