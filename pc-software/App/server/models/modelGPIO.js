const mongoose = require('mongoose');

var gpioSchema = mongoose.Schema({
    _id: String,
    type: Number,
    val: Number
});

// gpioSchema.methods.dudify = function() {
//     this.name = this.name + '-dude';

//     return this.name;   
// }

var GPIO = mongoose.model('GPIO', gpioSchema);

module.exports = GPIO;
