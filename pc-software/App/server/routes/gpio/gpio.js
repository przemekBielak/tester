const express = require('express');
const { exec } = require('child_process');
const modelGPIO = require('../../models/modelGPIO.js');
const router = express.Router();

router.post('/', function(req, res) {

    var data = new modelGPIO({
        _id: req.body.id,
        type: req.body.type,
        val: req.body.val
    })

    // Check if _id exists in database. If no, create new object, if yes, update the existing one
    modelGPIO.findOne({_id: req.body.id}, function(err, docs) {
        if(docs === null) {
            data.save(function(err) {
            if(err) throw err;
        });
        } else {
            modelGPIO.findByIdAndUpdate(req.body.id, 
                {$set: {type: req.body.type, val: req.body.val}},
                function(err, gpio) {if(err) throw err }
            );
        }
  });
});

module.exports = router;
