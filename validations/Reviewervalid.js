const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Name: Joi.string().alphanum().min(4).max(20).required(),
            Email:Joi.string().min(7).max(500).required(),
            Username: Joi.string().alphanum().min(4).max(15).required(),
            Password: Joi.string().alphanum().min(4).required(),
            YearsOfExperience: Joi.number().required(),
            Gender: Joi.string().alphanum().min(4).max(5).required()

        }

        return Joi.validate(request, createSchema)
    }
}