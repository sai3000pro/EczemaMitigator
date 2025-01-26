const express = require('express');
const router = express.Router();

const {getTemperatureData } = require('../controllers/tempController');
router.get('/temperature', getTemperatureData);

module.exports = router;