const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().alphanum().min(4).max(20).required(),
            email:Joi.string().min(7).max(500).required(),
            username: Joi.string().alphanum().min(4).max(15).required(),
            password: Joi.string().alphanum().min(4).required(),
            yearsOfExperience: Joi.number().required(),
            gender: Joi.string().alphanum().min(4).max(8).required()

        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(30),
            email: Joi.string().email(),
            gender: Joi.string(),
            username: Joi.string(),
            password :Joi.string(),
            yearsOfExperience:Joi.string().max(30)
        }

        return Joi.validate(request, updateSchema)
    }, 
}