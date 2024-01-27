const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    name:{type: String,
    required:[true, 'This field must be filled. Please enter name']},

    age:{type: Number,
    required:[true, 'This field must be filled. Please enter your age']},

    sex:{type: String,
    required:[true, 'This field must be filled. Please enter male or female']},

    location:{type: Object,
    required:true},   
}, {timestamps:true})

const myModel = mongoose.model('locationAPI', mySchema)

module.exports = myModel 