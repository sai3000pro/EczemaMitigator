import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";

function App() {
  // State to store data from API
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState("landing");

  // Fetch data from API
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/temperature")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to handle page navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />

      {currentPage === "landing" && <Landing onNavigate={handleNavigation} />}
      {currentPage === "dashboard" && <Dashboard />}
    </div> 
  );
}

export default App;
