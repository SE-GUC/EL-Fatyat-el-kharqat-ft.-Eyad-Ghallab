const Joi = require("joi");
module.exports = {

  createValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(3)
        .max(500)
        .required(),

      comment: Joi.string().required(),

      //date: Joi.date().required()
    };

    return Joi.validate(request, createSchema);
  },
  updateValidation: request => {
    const updateSchema = {
      name: Joi.string()
        .min(3)
        .max(500),
      comment: Joi.string(),
      date: Joi.date()
      // id: Joi.string()
    };

    return Joi.validate(request, updateSchema);
  }
};
