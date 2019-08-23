const express = require('express');
const fs = require('fs');
const router = express.Router();

var outObj = {};

var oldInObj = {};
var newInObj = {};

const dataOutPath = './data/out/gpioOut.json';
const dataInPath = './data/in/gpio_input.json';

router.post('/', function (req, res) {
    key = req.body.id;
    val = { type: req.body.type, val: req.body.val };
    outObj[key] = val;

    fs.writeFile(dataOutPath, JSON.stringify(outObj, null, 4) + ',\n', function (err) {
        if (err) throw err;
    });
    return res.end('done');
});


// Read input data from json file. Return data for received ID.
router.get('/stream', function (req, res) {
    res.status(200).set({
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
        "Content-Type": "text/event-stream"
    });

    const intervalId = setInterval(() => {
        newInObj = fs.readFileSync(dataInPath, 'utf8');

        if (newInObj != oldInObj) {
            res.write('\n')
            res.write(`data: ${JSON.stringify(JSON.parse(newInObj))}\n\n`);
        }

        oldInObj = newInObj;
    }, 1000)

    req.on('close', () => {
        clearInterval(intervalId);
    });
});

module.exports = router;
