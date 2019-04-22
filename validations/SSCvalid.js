const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Company_name: Joi.string().required(),
            Company_nameinenglish: Joi.string(),

            Governorate: Joi.string().required(),
                        City: Joi.string()
      .required(),
      Company_Address: Joi.string().required(),
      Company_Phone_Number: Joi.string(),
      Fax: Joi.string(),
      Capital_Currency: Joi.string()
       
        .required(),
      capital: Joi.number().integer().min(50000).max(999999999999).required(),
      investorname: Joi.string()
        .required(),
      Investor_type: Joi.optional(),
      Gender: Joi.optional(),
      Nationality: Joi.string().required(),
      TypeOf_IdentityProof: Joi.required(),
      investor_nationalid: Joi.string().min(14).max(14).required(),
      BirthDate: Joi.date()  
        .required(),
      Address: Joi.string().required(),
      Phone_Number: Joi.string()
        .max(11).min(11),
        Investor_Fax: Joi.string(),

      email: Joi.string(),
      BOD_Name: Joi.string()
        .required(),
      BOD_Investor_Type: Joi.string().required(),
      BOD_Gender: Joi.string()
        .required(),
      BOD_Nationality: Joi.string().required(),
      BOD_TypeOfIdentityProof: Joi.string()
        .required(),
      BOD_NationalID: Joi.string().min(14).max(14).required(),
      BOD_BirthDate: Joi.date().required(),
      BOD_Address: Joi.string().required(),
     
      PositionInBOD: Joi.string().required(),
      
Locked:Joi.boolean(),
Status: Joi.string(),
is_the_external_entities_notified: Joi.boolean(),
    };

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            Company_name: Joi.string(),
            Company_nameinenglish: Joi.string(),

            Governorate: Joi.string(),
              City: Joi.string()
              ,
              Company_Address: Joi.string(),
              Company_Phone_Number: Joi.string(),
              Fax: Joi.string(),
              Capital_Currency: Joi.string()
    ,
    capital: Joi.number().integer().min(50000).max(999999999999),
    investorname: Joi.string(),
    Investor_type: Joi.optional(),
    Gender: Joi.optional(),
    Nationality: Joi.optional(),
TypeOf_IdentityProof: Joi.optional(),
investor_nationalid: Joi.string().min(14).max(14),
BirthDate: Joi.date(),
Address: Joi.string().min(3),
Phone_Number: Joi.string().max(13),
Investor_Fax: Joi.string(),
email: Joi.string(),
BOD_Name: Joi.string(),
BOD_Investor_Type: Joi.string(),
BOD_Gender: Joi.string(),
BOD_Nationality:Joi.optional(),
BOD_TypeOfIdentityProof: Joi.string(),
BOD_NationalID: Joi.string(),
BOD_BirthDate: Joi.date(),
BOD_Address: Joi.string(),
PositionInBOD: Joi.string(),
Lock:Joi.boolean(),
Status: Joi.string(),
is_the_external_entities_notified: Joi.boolean(),
Lawyer_review: Joi.string(),

        }

        return Joi.validate(request, updateSchema) 
        
    }, 
}