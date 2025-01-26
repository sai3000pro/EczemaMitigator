require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5005;

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