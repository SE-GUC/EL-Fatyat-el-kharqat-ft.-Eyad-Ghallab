const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const ReviewerSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    YearsOfExperience: {
        type: Number,
        required: true
    },
    Username:{
        type: String,
        required: true
    },
    Gender:{
        type: String,
        required: true
    },



})

module.exports = Reviewer = mongoose.model('reviewers', ReviewerSchema)