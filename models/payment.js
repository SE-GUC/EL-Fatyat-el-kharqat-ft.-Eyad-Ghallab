const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const paymentSchema = new Schema({
    Card_type:{
        type: String,
        required: true
    },
    Card_no: {
        type: Number,
        required: true
    },
    Amount:{
        type: Number,
        required: true
    },
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Phone_number:{
        type: Number,
        required: true
    },
    Street_Address: {
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    State_Region:{
        type: String,
        required: true
    },
    Expire_date:{
        type: String,
        required: true
    },
    CVC:{
        type: Number,
        required: true
    },
    Country:{
        type: String,
        required: true
    },
    Postal_Zipcode:{
        type: String,
        required: true
    },




})

module.exports = payment = mongoose.model('payment', paymentSchema)