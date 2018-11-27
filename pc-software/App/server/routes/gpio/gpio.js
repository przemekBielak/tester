const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
// const modelGPIO = require('../../models/modelGPIO.js');
const router = express.Router();

router.post('/', function(req, res) {
    console.log(req.body);
    fs.appendFile("gpio.json", JSON.stringify(req.body) + '\n', function(err) {
        if (err) throw err;
    });
});

module.exports = router;
