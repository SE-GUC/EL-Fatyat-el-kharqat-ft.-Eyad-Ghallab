const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
           
            investor_Email: Joi.string().min(3).max(100).required(),
            MSG: Joi.string().min(3).max(500).required(),
            reviewer_Name: Joi.string(),
            notify_number: Joi.string(),
            User_id:Joi.string()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            MSG: Joi.string().min(3).max(500),
            investor_Email: Joi.string().min(3).max(100),
            reviewer_Name: Joi.string(),
            notify_number: Joi.string(),
            User_id:Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}
