const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const ContractSchema = new Schema({
    First_party_name:{
        type: String,
        required: true
    },
    Second_party_name:{
        type: String,
        required: true
    },
    First_party_address:{
        type: String,
        required: true
    },
    Second_party_address:{
        type: String,
        required: true
    },
    Day:{
        type: String,
        required: true
    },
    Month:{
        type: String,
        required: true
    },
    Year:{
        type: String,
        required: true
    },
    Time:{
        type: String,
        required: true
    },
    Corporate_name:{
        type: String,
        required: true
    },
    Corporate_governorate: {
        type: String,
        required: true
    },
    Corporate_city: {
        type: String, 
        required: true
    },
    Corporate_address: {
        type: String, 
        required: true
    },
    Corporate_Phone_Number: {
        type: String,
        
    },
    Investor_name:{
        type: String,
        required: true
    },
    Investor_address:{
        type: String,
        required: true
    },
    Investor_ID:{
        type: String,
        required: true
    },
    Investor_nationality:{
        type: String,
        required: true
    },
    Investor_DOB:{
        type: String,
        required: true
    },
    Investor_phone_number:{
        type: String,
        required: true
    },
    Investor_Fax: {
        type: String,
        
    },
    Investor_email: {
        type: String,
        
    },
    Main_business_activity: {
        type: String,
        required: true
    },
    Other_activities: {
        type: String,
        required: true
    },
    Duration_of_the_company: {
        type: String,
        required: true
    },
    Initial_capital: {
        type: String,
        required: true
    },
    Capital_Currency: {
        type: String,
        required: true
    },
    Status:{
       type: String,
       required:true
   },
   Type_of_form:{
    type: String,
    required:true
}

    
})

module.exports = Contract = mongoose.model('Contract', ContractSchema)


