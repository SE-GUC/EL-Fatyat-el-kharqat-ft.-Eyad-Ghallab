const Joi = require('joi')
module.exports = {
updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            comment: Joi.string(),
            id: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}