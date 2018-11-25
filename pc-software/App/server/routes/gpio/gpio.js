const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

var GPIO = require('../../models/modelGPIO.js');

router.post('/', function(req, res) {
    gpioData = req.body;
    console.log(gpioData);

    var data = new GPIO({
      _id: gpioData.id,
      type: gpioData.type,
      val: gpioData.val
    })

    data.save(function(err) {
      if(err) throw err;

      console.log('GPIO data saved successfully');
    });
  
  });

module.exports = router;
