const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const notificationSchema = new Schema({
    investor_Email: {
        type: String,
        required: true
    },
    MSG: {
        type: String,
        required: true
    },
    reviewer_Name: {
        type: String,
        required: true
    },
    notify_number:{
        type: Number,
        required: false
    },
    User_id:{
        type :Number,
        required:false
    }
    
})

module.exports = Notification = mongoose.model('Notification', notificationSchema)