const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const Patient = require('./Model/Patient');
const Prescription = require('./Model/Prescription');

//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
    .then(() => console.log('Connected'))
    .catch(() => console.log('Error Connecting'));

// mongodb+srv://testing:newtesting@Cluster0.fvmnl.mongodb.net/<dbname>?retryWrites=true&w=majority


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get("/patients/allPrescriptions", (req, res) => {
    Prescription.find()
        //if data is returned, send data as a response
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

app.post("/patients/newPrescription", (req, res) => {

    const prescription = new Prescription({
        name: req.body.name,
        doctor: req.body.doctor,
        drug: req.body.drug,
        manufacturer: req.body.manufacturer,
        dosage: req.body.dosage,
        usagePerDay: req.body.usagePerDay,
        bloodGroup: req.body.bloodGroup,
        age: req.body.age,
        contact: req.body.contact
    });

    prescription.save()
        .then(() => console.log('Successfully Added Prescription'))
        .catch(err => console.log(err))
});

app.delete('/patients/removePrescription/:id', (req, res, next) => {
    Prescription.deleteOne({ _id: req.params.id })
        .then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
        })
})


app.post("/patients/addPatient", (req, res) => {

    const patient = new Patient({
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        nextOfKin: req.body.nextOfKin,
        numOfNOK: req.body.numOfNOK
    });

    patient.save()
        .then(() => console.log('Successfully Added Patient'))
        .catch(err => console.log(err))
});

app.get("/patients/getPatients", (req, res) => {
    Patient.find()
        //if data is returned, send data as a response
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

app.delete('/patients/removePatient/:id', (req, res, next) => {
    Patient.deleteOne({ _id: req.params.id })
        .then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
        })
})

module.exports = app;