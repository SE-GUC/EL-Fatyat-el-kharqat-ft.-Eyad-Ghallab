const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
     
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      address: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required()
    };

    return Joi.validate(request, createSchema);
  },
  updateValidation: request => {
    const updateSchema = {
      
      name: Joi.string()
        ,
      email: Joi.string().email(),
      address: Joi.string(),
      username: Joi.string(),
      password: Joi.string()
    };

    return Joi.validate(request, updateSchema);
  }
};
