const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            emial: Joi.string().min(3).max(100).required(),
            address: Joi.string().required(),
            username: Joi.string().required(),
            password:Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            id: Joi.number().min(50).max(3000),
            name: Joi.string().alphanum().min(3).max(30),
            email: Joi.string().email(),
            address: Joi.string(),
            username: Joi.string(),
            password :Joi.string(),
            
        }

        return Joi.validate(request, updateSchema)
    }, 

}