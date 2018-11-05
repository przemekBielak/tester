const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 5000;

const data = require('./data.json');

app.use(express.static(path.join(__dirname, '../dist/')));

app.get('/bash', (req, res) => {
  exec('./test.sh', function(err, stdout, stderr) {
    if(err) {
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
});

app.get('/data', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

app.get('/post', function(req, res) {
  var name = req.param('name');
  var id = req.param('id');

  res.send('Your name is ' + name + ' ' + id);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});