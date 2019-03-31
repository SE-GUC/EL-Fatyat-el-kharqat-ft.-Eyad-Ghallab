const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            MSG: Joi.string().min(3).max(500).required(),
            investor_Email: Joi.string().min(3).max(100).required(),
            reviewer_Name: Joi.string(),
            notify_number: Joi.number(),
            User_id:Joi.number()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            MSG: Joi.string().min(3).max(500),
            investor_Email: Joi.string().min(3).max(100),
            reviewer_Name: Joi.string(),
            notify_number: Joi.number(),
            User_id:Joi.number()
        }

        return Joi.validate(request, updateSchema)
    }, 
}