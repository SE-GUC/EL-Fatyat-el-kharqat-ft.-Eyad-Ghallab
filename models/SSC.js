const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SSCSchema = new Schema({
  Company_name: {
    type: String,
    required: true
  },
  Company_nameinenglish: {
    type: String
  },
  Governorate: {
    type: String,
    required: true
  },
  City: {
    type: String,
    required: true
  },
  reviews: {
    type: String
  },
  Company_Address: {
    type: String,
    required: true
  },
  Company_Phone_Number: {
    type: String
  },
  Fax: {
    type: String
  },
  Capital_Currency: {
    type: String,
    required: true
  },
  capital: {
    type: Number,
    required: true
  },
  investorname: {
    type: String,
    required: true
  },
  Investor_type: {
    type: String
  },
  Gender: {
    type: String
  },
  Nationality: {
    type: String,
    required: true
  },
  TypeOf_IdentityProof: {
    type: String,
    required: true
  },
  investor_nationalid: {
    type: String,
    required: true
  },
  BirthDate: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  Phone_Number: {
    type: String
  },
  Investor_Fax: {
    type: String
  },
  email: {
    type: String
  },
  BOD_Name: {
    type: String,
    required: true
  },
  BOD_Investor_Type: {
    type: String,
    required: true
  },
  BOD_Gender: {
    type: String,
    required: true
  },
  BOD_Nationality: {
    type: String,
    required: true
  },
  BOD_TypeOfIdentityProof: {
    type: String,
    required: true
  },
  BOD_NationalID: {
    type: String,
    required: true
  },
  BOD_BirthDate: {
    type: Date,
    required: true
  },
  BOD_Address: {
    type: String,
    required: true
  },
  PositionInBOD: {
    type: String,
    required: true
  },
  Formdate: {
    type: Date,
    default: Date.now
  },
  Locked: {
    type: Boolean,
    default: false
  },
  Status: {
    type: String,
    default: "binding"
  },
  is_the_external_entities_notified: {
    type: Boolean
  },
  Lawyer_review: {
    type: String,
    default: "binding"
  }
});

module.exports = SSC = mongoose.model("SSC", SSCSchema);
