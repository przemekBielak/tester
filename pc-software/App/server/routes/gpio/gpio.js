const express = require('express');
const fs = require('fs');
const router = express.Router();

var outObj = {};

const dataOutPath = './data/out/gpioOut.json';
const dataInPath = './data/in/gpioIn.json';

router.post('/', function(req, res) {

    key = req.body.id;
    val = {type: req.body.type, val: req.body.val};
    outObj[key] = val;
    
    fs.writeFile(dataOutPath, JSON.stringify(outObj, null, 4) + ',\n', function(err) {
        if (err) throw err;
    });
    return res.end('done');
});

// Read input data from json file. Return data for received ID.
router.get('/', function(req, res) {
    var inObj = JSON.parse(fs.readFileSync(dataInPath, 'utf8'));

    var inputVal = inObj[req.query.id].type
    res.send({val: inputVal});
});




module.exports = router;
