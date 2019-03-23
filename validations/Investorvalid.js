const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(3).max(100).required(),

            username: Joi.string().required(),
            password: Joi.string().min(3).max(100).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            email: Joi.string().min(3).max(100),
  
            username: Joi.string(),
            password: Joi.string().min(3).max(100),

        }

        return Joi.validate(request, updateSchema)
    }, 
}