const express = require('express');
const fs = require('fs');
const router = express.Router();
const EventEmitter = require('events');


var outObj = {};

const dataOutPath = './data/out/gpioOut.json';
const dataInPath = './data/in/gpioIn.json';

router.post('/', function(req, res) {
    console.log('works')

    key = req.body.id;
    val = {type: req.body.type, val: req.body.val};
    outObj[key] = val;
    
    fs.writeFile(dataOutPath, JSON.stringify(outObj, null, 4) + ',\n', function(err) {
        if (err) throw err;
    });
    return res.end('done');
});

function sseDemo(req, res) {
    let messageId = 0;

    const intervalId = setInterval(() => {
        res.write(`id: ${messageId}\n`);
        res.write(`data: Test Message -- ${Date.now()}\n\n`);
        messageId += 1;
    }, 1000);

    req.on('close', () => {
        clearInterval(intervalId);
    });
}

// Read input data from json file. Return data for received ID.
router.get('/stream', function(req, res) {
    res.status(200).set({
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
        "Content-Type": "text/event-stream"
    })

    sseDemo(req, res);
});

    // var inObj = JSON.parse(fs.readFileSync(dataInPath, 'utf8'));

    // var inputVal = inObj[req.query.id].val;
    // res.send({val: inputVal});
    // const inObj = JSON.parse(fs.readFileSync(dataInPath, 'utf8'));
    // const inputVal = inObj[req.query.id].val;

    // setTimeout(() => {
    //     res.write({val: inputVal})
    // }, 2000);




module.exports = router;
