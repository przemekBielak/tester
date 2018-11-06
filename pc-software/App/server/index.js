const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../dist/')));

// Parse requests as JSON when needed
app.use(express.json());

app.get('/bash', (req, res) => {
  exec('./test.sh hello!', function(err, stdout, stderr) {
    if(err) {
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
});

app.post('/gpio', function(req, res) {
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});