const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const ContractSchema = new Schema({
    
    Corporate_name:{
        type: String,
        required: true
    }
    
    
})

module.exports = Contract = mongoose.model('contractFinal', ContractSchema)


