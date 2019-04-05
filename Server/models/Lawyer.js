const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const uuid = require('uuid')

// Create the schema
const LawyerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phonenumber: {
        type: Number , 
        required: true
    },
    legaltype: {
        type: String, 
        required: true
    },
    birthdate: {
        type: Date, 
        required: true
    },
    noOfPreviousCases: {
        type: Number , 
        required: true
    },
    gender: {
        type: String, 
        required: true
    },
    
    
   
    
})

module.exports = Lawyer = mongoose.model('Lawyers', LawyerSchema)