require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const axios = require("axios");

const { sendMsgToPhone } = require("./services");

const app = express();
const PORT = process.env.PORT || 5005;
const TEMP_THRESHOLD = 10;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", require("./routes/tempRoute"));

app.get("/", (req, res) => {
    res.send("Server is running");
}
);

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
}
);
const checkTemperature = () => {
    axios.get('http://localhost:5005/api/temperature')
        .then(response => {
            // Ensure response.data is an object
            if (typeof response.data === 'string') {
                response.data = JSON.parse(response.data);
            }

            console.log('Parsed Response:', response.data); // Log the parsed response

            const temperature = response.data.temperature;
            const humidity = response.data.humidity;
            console.log(`Current temperature: ${temperature}`);
            console.log(`Current humidity: ${humidity}`);

            sendMsgToPhone(temperature, TEMP_THRESHOLD);
        })
        .catch(error => {
            console.error('Error fetching temperature:', error);
        });
};

setInterval(checkTemperature, 5000);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
}
);

const server = app.listen(PORT, () => {
    console.log("Server is running on Port:", PORT);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});

