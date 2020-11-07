const mongoose = require('mongoose');

const Patients = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 8
    },
    address: {
        type: String,
        required: true,
        minLength: 10
    },
    phoneNumber: {
        type: Number,
        required: true,
        minLength: 8
    },
    nextOfKin: {
        type: String,
        required: true,
        minLength: 8
    },
    numOfNOK: {
        type: Number,
        required: true,
        minlength: 8
    }
})

module.exports = mongoose.model('Patients', Patients, 'Patients');
