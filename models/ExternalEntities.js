const mongoose = require('mongoose')
const Schema = mongoose.Schema

const   EntitySchema = new Schema({
   
    name: {
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
module.exports = ExternalEntities = mongoose.model('ExternalEntities', EntitySchema)