
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const investorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
 
    username: {
        type: String, 
        required: true
    },
      password: {
        type: String,
        required: true
    },
    nationality: {
    type: String,
    required: true
    }
    , 
    gender: {
        type: String,
        required: true
    }
    ,
    birthdate: {
        type: Date,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: String,
        required: true
    }

})

module.exports = investor = mongoose.model('investors', investorSchema)

