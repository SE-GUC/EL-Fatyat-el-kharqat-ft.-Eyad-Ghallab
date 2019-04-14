const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Name: Joi.string().alphanum().min(4).max(20).required(),
            Email:Joi.string().min(7).max(500).required(),
            Username: Joi.string().alphanum().min(4).max(15).required(),
            Password: Joi.string().alphanum().min(4).required(),
            YearsOfExperience: Joi.number().required(),
            Gender: Joi.string().alphanum().min(4).max(8).required()

        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            id: Joi.number().min(50).max(3000),
            Name: Joi.string().alphanum().min(3).max(30),
            Email: Joi.string().email().regex(/example.com/),
            Gender: Joi.string(),
            Username: Joi.string(),
            Password :Joi.string(),
            YearsOfExperience:Joi.string().max(30)
        }

        return Joi.validate(request, updateSchema)
    }, 
}