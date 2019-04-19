const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SpcFormSchema = new Schema({
    
    Facility_name: {
        type: String,
        required: true
    },
    Governorate: {
        type: Object,
        required: true
    },
    City: {
        type: Object, 
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
        type: Object,
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
    },
    Nationality: {
        type: Object,
        required: true
    },
    TypeOf_IdentityProof: {
        type: Object,
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
        type: Date,
        default: Date.now,
    },
    Locked: {
       type: Boolean,
    },
    Status: {
        type: String, 
        default: "binding"
    
    },
    is_the_external_entities_notified: {
        type: Boolean, 
    
    },
    Lawyer_review:{
        type: String, 
        default: "binding"
    
    }
})

module.exports = SpcForm = mongoose.model('SPC', SpcFormSchema)