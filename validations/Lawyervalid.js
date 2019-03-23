const Joi = require('joi')

module.exports = {
    

    updateValidation: request => {

        const updateSchema = {
            username: Joi.string().min(5).required(),
            password: Joi.string().min(8).required(),
            fullname: Joi.string().min(9).required(),
            birthdate: Joi.date().max(1980).required(),
            email: Joi.string().email().required(),
            phonenumber:Joi.string().trim().regex(/^[0-9]{11,11}$/).required(),
            legaltype: Joi.string().alphanum().required(),
            gender: Joi.string().alphanum().required(),
            noOfPreviousCases: Joi.number().required(),
        
        }

        return Joi.validate(request, updateSchema)
    }, 
   
        createValidation: request => {
            const createSchema = {
            fullname: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            phonenumber: Joi.string().trim().regex(/^[0-9]{11,11}$/).required(),
            legaltype: Joi.string().min(3).required(),
            birthdate: Joi.date().max(1990).required(),
            noOfPreviousCases: Joi.number().required(),
            gender: Joi.string().allow('').optional(),
            username:  Joi.string().required(),
            password: Joi.string().min(8).required()
            }
    
            return Joi.validate(request, createSchema)
        },
    
       
    }
