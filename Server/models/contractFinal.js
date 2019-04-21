const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const ContractSchema = new Schema({
    // Day:{
    //     type: String,
    //     required: true
    // },
    // Month:{
    //     type: String,
    //     required: true
    // },
    // Year:{
    //     type: String,
    //     required: true
    // },
    Corporate_name:{
        type: String,
        required: true
    }
    // ,
    // form_id:{
    //     type: String,
    //     required: true
    // }
    //,
    // Corporate_governorate: {
    //     type: String,
    //     required: true
    // }
    // ,
    // Corporate_city: {
    //     type: String, 
    //     required: true
    // }
    //,
    // Corporate_address: {
    //     type: String, 
    //     required: true
    // },
    
    // Investor_name:{
    //     type: String,
    //     required: true
    // },
    // Investor_address:{
    //     type: String,
    //     required: true
    // },
    // Investor_ID:{
    //     type: String,
    //     required: true
    // },
    // Investor_nationality:{
    //     type: String,
    //     required: true
    // },
    // Investor_DOB:{
    //     type: String,
    //     required: true
        
    // },

    // Manager_name:{
    //     type: String,
    //     required: true
    // },
    // Manager_address:{
    //     type: String,
    //     required: true
    // },
    // Manager_ID:{
    //     type: String,
    //     required: true
    // },
    // Manager_nationality:{
    //     type: String,
    //     required: true
    // },
    // Manager_DOB:{
    //     type: String,
    //     required: true
        
    // },
    // Initial_capital: {
    //     type: String,
    //     required: true
    // }

    
})

module.exports = Contract = mongoose.model('contractFinal', ContractSchema)


