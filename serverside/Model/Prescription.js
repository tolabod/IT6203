const mongoose = require('mongoose');

const Prescriptions = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 10
  },
  doctor: {
    type: String,
    required: true,
    minLength: 10
  },
  drug: {
    type: String,
    required: true,
    minLength: 5
  },
  manufacturer: {
    type: String,
    required: true,
    minLength: 10
  },
  dosage: {
    type: Number,
    required: true
  },
  usagePerDay: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 5
  },
  bloodGroup: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true,
    minLength: 15
  }
})

module.exports = mongoose.model('Prescription', Prescriptions, 'Prescription');
