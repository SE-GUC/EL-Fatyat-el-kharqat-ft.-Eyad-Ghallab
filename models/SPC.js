const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const SpcFormSchema = new Schema({
    
    Facility_name: {
        type: String,
        required: true
    },
    Governorate: {
        type: String,
        required: true
    },
    City: {
        type: String, 
        required: true
    },
    Facility_Address: {
        type: String, 
        required: true
    },
    Facility_Phone_Number: {
        type: String,
        
    },
    Fax: {
        type: String,
        
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
    Gender: {
        type: String,
        required: true
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
        type: Date,
        required: true
    },
    Phone_Number: {
        type: String,
       
    },
    Investor_Fax: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    Investor_Address: {
        type: String,
        required: true
    },
    Form_Date: {
        type: String,
    },
    Status: {
        type: String, 
    
    }
})

module.exports = SpcForm = mongoose.model('spcforms', SpcFormSchema)