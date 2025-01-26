const axios = require("axios");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../../temperature_data.txt");
const { jsonifyLastNonEmptyLine } = require("../services");

const getTemperatureData = async (req, res) => {
    const data = jsonifyLastNonEmptyLine(filePath);
    res.json(data);
}

module.exports = {
    getTemperatureData
}