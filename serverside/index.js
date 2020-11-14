const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const Patient = require('./Model/Patient');

//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
    .then(() => console.log('Connected'))
    .catch(() => console.log('Error Connecting'));

const baseAPI = '/api/v1/prescription/';

// mongodb+srv://testing:newtesting@Cluster0.fvmnl.mongodb.net/<dbname>?retryWrites=true&w=majority


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// app.get("/patients/allPrescriptions", (req, res) => {
//     Prescription.find()
//         //if data is returned, send data as a response
//         .then(data => res.status(200).json(data))
//         //if error, send internal server error
//         .catch(err => {
//             console.log('Error: ${err}');
//             res.status(500).json(err);
//         });
// });

// app.post("/patients/newPrescription", (req, res) => {
//
//     const prescription = new Prescription({
//         name: req.body.name,
//         doctor: req.body.doctor,
//         drug: req.body.drug,
//         manufacturer: req.body.manufacturer,
//         dosage: req.body.dosage,
//         usagePerDay: req.body.usagePerDay,
//         bloodGroup: req.body.bloodGroup,
//         age: req.body.age,
//         contact: req.body.contact
//     });
//
//     prescription.save()
//         .then(() => console.log('Successfully Added Prescription'))
//         .catch(err => console.log(err))
// });

// app.delete('/patients/removePrescription/:id', (req, res, next) => {
//     Prescription.deleteOne({ _id: req.params.id })
//         .then(result => {
//             console.log(result);
//             res.status(200).json("Deleted!");
//         })
// })


app.post(baseAPI + "add", (req, res) => {

    const patient = new Patient({
      patient: req.body.patient,
      prescription: req.body.prescription,
      dosage: req.body.dosage,
      usageInterval: req.body.usageInterval,
      pharmacy: req.body.pharmacy,
      manufacturer: req.body.manufacturer,
      presidingDoctor: req.body.presidingDoctor
    });


    patient.save()
        .then(() => console.log('Successfully Added Patient'))
      .then(res.status(200).send("DONE"))
        .catch(err => console.log(err))
});

app.get(baseAPI + "get", (req, res) => {
    Patient.find()
        //if data is returned, send data as a response
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
});

app.delete(baseAPI + 'delete/:id', (req, res, next) => {
    Patient.deleteOne({ _id: req.params.id })
        .then(result => {
            console.log(result);
            res.status(200).json("Deleted!");
        })
})

app.put(baseAPI + 'update/:id', (req, res, next) => {
  // Patient.update
  console.log("ID:" + req.params.id)

  if (mongoose.isValidObjectId(req.params.id)) {
    Patient.findOneAndUpdate({_id: req.params.id},
      {$set: {
          patient: req.body.patient,
          prescription: req.body.prescription,
          dosage: req.body.dosage,
          usageInterval: req.body.usageInterval,
          pharmacy: req.body.pharmacy,
          manufacturer: req.body.manufacturer,
          presidingDoctor: req.body.presidingDoctor
      }}, {new: true}
    )
      .then((patient) => {
        if (patient)
          console.log(patient);
        else
          console.log('No data exist for this ID');
      })
      .catch((err) => console.log(err))
  } else {
    console.log("Invalid Id")
  }
})

app.get(baseAPI + 'find/:searchItem', (req, res) => {

  Patient.find({prescription: req.params.searchItem})
    .then(data => res.status(200).json(data))
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
})

module.exports = app;
