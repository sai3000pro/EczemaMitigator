// Fetch the latest temperature data from the API
fetch("http://localhost:8000/temperature")
  .then((response) => response.json())  // Parse the response as JSON
  .then((data) => {
    console.log(data.temperature); // Log the temperature value to the console

    // Replace "Fetching data..." in the <td id="data">
    if (data.temperature) {
      document.getElementById("data").textContent = `Temperature: ${data.temperature}`;
      document.getElementById("temperature").textContent = `Current Temperature: ${data.temperature}`;
    } else {
      document.getElementById("data").textContent = "No data available.";
      document.getElementById("temperature").textContent = data.message;
    }
  })
  .catch((error) => {
    // Handle errors in fetching or processing the data
    document.getElementById("data").textContent = "Error fetching data.";
    document.getElementById("temperature").textContent = "Error fetching temperature.";
    console.error(error); // Log the error for debugging
  });
