const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Running bash script...');
    exec('./test.sh helloRouter!', function(err, stdout, stderr) {
      if(err) {
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    })

    console.log('done');
  });

module.exports = router;