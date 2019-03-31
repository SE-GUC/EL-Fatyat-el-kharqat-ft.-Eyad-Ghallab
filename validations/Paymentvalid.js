const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            Card_type: Joi.string().min(4).max(20).required(),
            Card_no:Joi.number().min(11111111111111).max(99999999999999).required(),
            Firstname: Joi.string().min(4).max(15).required(),
            Lastname: Joi.string().min(4).max(15).required(),
            Amount: Joi.number().min(10).max(9999999).required(), 
            Email: Joi.string().min(7).max(500).required(),
            Phone_number: Joi.string().trim().regex(/^[0-9]{11,11}$/).required(),
            Street_Address: Joi.string().min(4).max(20).required(),
            City: Joi.string().min(3).max(10).required(),
            State_Region: Joi.string().min(3).max(10).required(),
            Expire_date: Joi.string().required(),
            CVC:Joi.number().min(000).max(999).required(),
            Country:Joi.string().min(3).max(15).required(),
            Postal_Zipcode:Joi.string().min(3).max(15).required()
        }

        return Joi.validate(request, createSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            Card_type: Joi.string().min(4).max(20),
            Card_no:Joi.number().min(11111111111111).max(99999999999999),
            Firstname: Joi.string().min(4).max(15),
            Lastname: Joi.string().min(4).max(15),
            Amount: Joi.number().min(10).max(9999999), 
            Email: Joi.string().min(7).max(500),
            Phone_number: Joi.string().trim().regex(/^[0-9]{11,11}$/),
            Street_Address: Joi.string().min(4).max(20),
            City: Joi.string().min(3).max(10),
            State_Region: Joi.string().min(3).max(10),
            Expire_date: Joi.string(),
            CVC:Joi.number().min(000).max(999),
            Country:Joi.string().min(3).max(15),
            Postal_Zipcode:Joi.string().min(3).max(15)
        }

        return Joi.validate(request, updateSchema)
    }, 
}

