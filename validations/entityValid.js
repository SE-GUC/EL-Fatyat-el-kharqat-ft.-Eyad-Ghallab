const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            username: Joi.string().required(),
            password:Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            username: Joi.string(),
            password: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 


}