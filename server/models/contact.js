// COMP229-F2020-Assignment2, Nguyen Khang Nguyen, 301098234, 10/25/2020
let mongoose = require('mongoose')

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);