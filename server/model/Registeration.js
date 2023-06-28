const mongoose = require('mongoose');
const registerationSchema = new mongoose.Schema({
    email:{
        type: String,
        required: 'This field is required.'
    },
    password:{
        type: String,
        required: 'This field is required.'
    },
    name:{
        type: String,
        required: 'This field is required.'
    },
    phone:{
        type: String,
        required: 'This field is required.'
    },
    address:{
        type: String,
        required: 'This field is required.'
    }

});

module.exports = mongoose.model('Registeration', registerationSchema);