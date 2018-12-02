const express = require('express');
const path = require('path');

const bashRouter = require('./routes/bash/bash.js');
const gpioRouter = require('./routes/gpio/gpio.js');

const PORT = process.env.PORT || 5000;
const app = express();

// Parse requests as JSON when needed
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist/')));

app.use('/bash', bashRouter);
app.use('/gpio', gpioRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});