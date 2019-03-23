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


}