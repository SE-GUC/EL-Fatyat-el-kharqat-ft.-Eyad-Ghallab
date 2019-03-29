const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SSCSchema = new Schema({
   
    Company_name: {
        type: String,
        required: true
    },
    Governorate: {
        type: String,
        required: true
    },
    City: {
        type: String, 
        required: true
    },
    reviews: {
        type: [String]
    },
    Company_Address: {
        type: String, 
        required: true
    },
    Company_Phone_Number: {
        type: String, 
        required: true
    },
    Fax: {
        type: String, 
        required: true
    },
    Capital_Currency: {
        type: String, 
        required: true
    },
    capital: {
        type: Number, 
        required: true
    },
    investorname: {
        type: String, 
        required: true
    },
    Investor_type: {
        type: String, 
        required: true
    },
    Gender: {
        type: String, 
        required: true
    },
    Nationality: {
        type: String, 
        required: true
    },
    TypeOf_IdentityProof: {
        type: String, 
        required: true
    },
    investor_nationalid: {
        type: String, 
        required: true
    },
    BirthDate: {
        type: String, 
        required: true
    },
    Address: {
        type: String, 
        required: true
    },
    Phone_Number: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    BOD_Name: {
        type: String, 
        required: true
    },
    BOD_Investor_Type: {
        type: String, 
        required: true
    },
    BOD_Gender: {
        type: String, 
        required: true
    },
    BOD_Nationality: {
        type: String, 
        required: true
    },
    BOD_TypeOfIdentityProof: {
        type: String, 
        required: true
    },
    BOD_NationalID: {
        type: String, 
        required: true
    },
    BOD_BirthDate: {
        type: String, 
        required: true
    },
    BOD_Address: {
        type: String, 
        required: true
    },
    PositionInBOD: {
        type: String, 
        required: true
    },
   Formdate:{
       type:String,
       
   },
   Locked:{
       type:Boolean,
      
   },
   Status:{
    type:Boolean,
   
},
   is_the_external_entities_notified:{
    type:Boolean,
   
}


})

module.exports = SSC = mongoose.model('SSC', SSCSchema)
