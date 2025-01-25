document.addEventListener("DOMContentLoaded", async () => {
  const dataCell = document.getElementById("data");
  const extraCell = document.getElementById("extra");

  try {
    const response = await fetch("https://api.example.com/eczema-data");
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const data = await response.json();

    // Populate the table with fetched data
    dataCell.textContent = data.message || "Data fetched successfully!";
    extraCell.textContent = data.details || "Extra details loaded.";
  } catch (error) {
    dataCell.textContent = "Failed to fetch data.";
    extraCell.textContent = error.message;
  }
});
