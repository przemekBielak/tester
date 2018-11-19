const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

router.post('/', function(req, res) {
    gpioData = req.body;
    console.log(gpioData);
  
    exec('./server/test.sh ' + gpioData.val, function(err, stdout, stderr) {
      if(err) {
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    })
  });

module.exports = router;