const express = require('express');
const fs = require('fs');
const router = express.Router();

var outObj = {};

var oldObj = {};
var newObj = {};

const dataOutPath = './data/out/gpioOut.json';
const dataInPath = './data/in/gpioIn.json';

router.post('/', function (req, res) {
    console.log('works')

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
        newObj = fs.readFileSync(dataInPath, 'utf8');

        if (newObj != oldObj) {
            res.write('\n')
            res.write(`data: ${JSON.stringify(newObj)}\n\n`);
        }

        oldObj = newObj;
    }, 1000)

    req.on('close', () => {
        clearInterval(intervalId);
    });
});



// setTimeout(() => {
//     res.write({val: inputVal})
// }, 2000);




module.exports = router;
