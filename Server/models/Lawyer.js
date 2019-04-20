const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const uuid = require('uuid')

// Create the schema
const LawyerSchema = new Schema({
  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  fullname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phonenumber: {
    type: Number,
    required: false
  },
  legaltype: {
    type: String,
    required: false
  },
  birthdate: {
    type: Date,
    required: false
  },
  noOfPreviousCases: {
    type: Number,
    required: false
  },
  gender: {
    type: String,
    required: false
  }
});

module.exports = Lawyer = mongoose.model("Lawyers", LawyerSchema);
