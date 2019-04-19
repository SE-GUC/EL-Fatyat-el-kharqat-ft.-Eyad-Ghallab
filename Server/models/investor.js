const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const investorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    ref: "Users"
  },

  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true,
    ref: "Users"
  },
  nationality: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  birthdate: {
    type: Date,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  jobtitle: {
    type: String,
    required: false
  },
  mobilenumber: {
    type: String,
    required: false
  }
});

module.exports = investor = mongoose.model("investors", investorSchema);
