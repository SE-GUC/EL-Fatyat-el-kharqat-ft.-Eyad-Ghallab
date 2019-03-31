

const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(3).max(100).required(),

            username: Joi.string().required(),
            password: Joi.string().min(3).max(100).required(),
            nationality: Joi.string().required(),
            gender:Joi.string().allow('').optional(),
            birthdate:Joi.date().required(),
            city: Joi.string().required(),
            country: Joi.string().required(),
            jobtitle:Joi.string().allow('').optional(),
            mobilenumber: Joi.string().trim().regex(/^[0-9]{11,11}$/).required(),

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            email: Joi.string().min(3).max(100),
  
            username: Joi.string(),
            password: Joi.string().min(3).max(100),
            nationality: Joi.string().required(),
            gender:Joi.string().allow('').optional(),
            birthdate:Joi.date().required(),
            city: Joi.string().required(),
            country: Joi.string().required(),
            jobtitle:Joi.string().allow('').optional(),
            mobilenumber: Joi.string().trim().regex(/^[0-9]{11,11}$/).required(),


        }

        return Joi.validate(request, updateSchema)
    }, 
}

