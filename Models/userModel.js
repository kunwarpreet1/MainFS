const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false // Set to true if you want it to be mandatory
    },
    location: {
        type: String,
        required: false // Set to true if you want it to be mandatory
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
