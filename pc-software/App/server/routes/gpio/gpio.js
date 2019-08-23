const express = require('express');
const fs = require('fs');
const router = express.Router();

var outObj = {};

var oldInObj = {};
var newInObj = {};

const dataOutPath = './data/out/gpio_output.json';
const dataInPath = './data/in/gpio_input.json';

router.post('/', function (req, res) {
    const splitted = req.body.moduleId.split('_')
    const deviceName = splitted[0];
    const moduleId = splitted[2];
    const itemId = req.body.itemId;
    const outputVal = req.body.val;
    const type = req.body.type;

    if (outObj.hasOwnProperty(deviceName)) {
        if (outObj[deviceName].hasOwnProperty(moduleId)) {
            if (outObj[deviceName][moduleId].hasOwnProperty(itemId)) {
                outObj[deviceName][moduleId][itemId] = {
                    "outputVal": outputVal,
                    "type": type
                };
            } else {
                outObj[deviceName][moduleId][itemId] = {
                    "outputVal": 0,
                    "type": 0
                };
            }
        } else {
            outObj[deviceName][moduleId] = {};
        }

    } else {
        outObj[deviceName] = {};
    }

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
