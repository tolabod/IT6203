const mongoose = require('mongoose');

const Patients = new mongoose.Schema({
    patient: {
        type: String,
        required: true,
        minLength: 8
    },
    prescription: {
      type: String,
      required: true
    },
    dosage: {
      type: Number,
      required: true,
    },
    usageInterval: {
      type: Number,
      required: true,
    },
    pharmacy: {
      type: String,
      required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    presidingDoctor: {
      type: String,
      required: true
    }
})

module.exports = mongoose.model('Prescription', Patients, 'Prescription');
