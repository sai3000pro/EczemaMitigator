fetch('http://127.0.0.1:8000/temperature')
    .then(response => response.json())
    .then(data => {
        console.log(data.temperature);
        // You can update your UI here with the temperature value
    })
    .catch(error => console.error('Error:', error));
