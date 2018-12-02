const express = require('express');
const fs = require('fs');
const router = express.Router();

var obj = {};
const filePath = './data/gpio.json';

router.post('/', function(req, res) {
    key = req.body.id;
    val = {type: req.body.type, val: req.body.val};
    obj[key] = val;
    
    fs.writeFile(filePath, JSON.stringify(obj, null, 4) + ',\n', function(err) {
        if (err) throw err;
    });
    return res.end('done');
});

module.exports = router;
