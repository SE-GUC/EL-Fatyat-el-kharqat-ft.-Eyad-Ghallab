const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
   
    name: {
        type: String,
        required: true
    },
    
    emial: {
        type: String,
        required: true
    },
    
    address: {
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
    }

   
})
module.exports = Admin= mongoose.model('Admin', AdminSchema)
