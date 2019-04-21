const Joi = require('joi')

module.exports = {
  createValidation: request => {
    const createSchema = {
      Facility_name: Joi.string()
      .required(),
      Facility_nameinenglish: Joi.string(),
    Governorate: Joi
     
      .required(),
    City: Joi
      
      .required(),
    Facility_Address: Joi.string().required(),
    Facility_Phone_Number: Joi.string(),
    Fax: Joi.string(),
    Capital_Currency: Joi.required(),
    capital: Joi.number()
      .integer(),
    investorname: Joi.string()
      .required(),

    Gender: Joi.optional(),
    Nationality: Joi
    
    .required(),
    TypeOf_IdentityProof: Joi
    .required(),
    investor_nationalid: Joi.string()
      .min(14)
      .max(14)
      .required(),
    BirthDate: Joi.date().required(),
    Investor_Address: Joi.string().required(),
    Phone_Number: Joi.string(),
    email: Joi.string(),
    Investor_Fax: Joi.string(),
    Locked: Joi.boolean(),
          Status: Joi.string(),
          is_the_external_entities_notified: Joi.boolean(),
          //Lawyer_review: Joi.String()
  

    }

    return Joi.validate(request, createSchema)
}, 

    updateValidation: request => {
      
        const updateSchema = {
            Facility_name: Joi.string(),
          Facility_nameinenglish:Joi.string(),
          Facility_Address: Joi.string(),
          Facility_Phone_Number: Joi.string(),
          Fax: Joi.string(),
          
          capital: Joi.number(),
          investorname: Joi.string(),
         
          investor_nationalid: Joi.string().min(14).max(14),
          BirthDate: Joi.date(),
          Phone_Number: Joi.string(),
          Investor_Fax: Joi.string(),
          email: Joi.string(),
          Investor_Address: Joi.string().min(3),
          Locked: Joi.boolean(),
          Status: Joi.string(),
          is_the_external_entities_notified: Joi.boolean(),
          Lawyer_review: Joi.string(),
  
      
  
        }

        return Joi.validate(request, updateSchema)
    }, 
}