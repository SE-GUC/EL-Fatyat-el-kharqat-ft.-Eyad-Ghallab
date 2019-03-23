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
}