const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      id: Joi.number(),
      name: Joi.string()
        .min(3)
        .max(500),
      email: Joi.string().email(),
      address: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required()
    };

    return Joi.validate(request, createSchema);
  },
  updateValidation: request => {
    const updateSchema = {
      id: Joi.number(),
      name: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
      email: Joi.string().email(),
      address: Joi.string(),
      username: Joi.string(),
      password: Joi.string()
    };

    return Joi.validate(request, updateSchema);
  }
};
