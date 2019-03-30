const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Card_type: Joi.string().alphanum().min(4).max(20).required(),
            Card_no:Joi.number().required(),
            Firstname: Joi.string().alphanum().min(4).max(15).required(),
            Lastname: Joi.string().alphanum().min(4).max(15).required(),
            Amount: Joi.number().required(),
            Email: Joi.string().min(7).max(500).required(),
            Phone_number: Joi.number().required(),
            Street_Address: Joi.string().alphanum().min(4).max(20).required(),
            City: Joi.string().alphanum().min(3).max(10).required(),
            State_Region: Joi.string().alphanum().min(3).max(10).required(),
            Expire_date: Joi.string().required(),
            CVC:Joi.number().required(),
            Country:Joi.string().alphanum().min(3).max(15).required(),
            Postal_Zipcode:Joi.string().alphanum().min(3).max(15).required(),
        }

        return Joi.validate(request, createSchema)
    }
}

