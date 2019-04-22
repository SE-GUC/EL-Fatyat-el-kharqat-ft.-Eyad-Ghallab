const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(3)
        .max(500)
        .required(),
      email: Joi.string()
        .min(3)
        .max(100)
        .required(),

      username: Joi.string().required(),
      password: Joi.string()
        .min(3)
        .max(100)
        .required(),
      nationality: Joi.string().required(),
      gender: Joi.string()
        .allow("")
        .optional(),
      birthdate: Joi.date().required(),
      city: Joi.string().required(),
      country: Joi.string().required(),
      jobtitle: Joi.string()
        .allow("")
        .optional(),
      mobilenumber: Joi.string()
        .trim()
        .regex(/^[0-9]{11,11}$/)
        .required(),
      nationalid: Joi.string()
        .min(14)
        .max(14)
        .required()
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      name: Joi.string()
        .min(3)
        .max(500),
      email: Joi.string()
        .min(3)
        .max(100),

      username: Joi.string(),
      password: Joi.string()
        .min(3)
        .max(100),
      nationality: Joi.string(),
      gender: Joi.string()
        .allow("")
        .optional(),
      birthdate: Joi.date(),
      city: Joi.string(),
      country: Joi.string(),
      jobtitle: Joi.string()
        .allow("")
        .optional(),
      mobilenumber: Joi.string()
        .trim()
        .regex(/^[0-9]{11,11}$/),
      nationalid: Joi.string()
        .min(14)
        .max(14)
       
    };

    return Joi.validate(request, updateSchema);
  },
  registerValidation: request => {
    const registerSchema = {
      name: Joi.string()
        .min(2)
        .max(30)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required(),
      username: Joi.string().required(),
      nationality: Joi.string().required(),
      gender: Joi.string(),
      birthdate: Joi.date(),
      city: Joi.string().required(),
      country: Joi.string().required(),
      jobtitle: Joi.string().required(),
      mobilenumber: Joi.string()
        .trim()
        .regex(/^[0-9]{11,11}$/),
      nationalid: Joi.string()
        .min(14)
        .max(14)
        .required()
    };

    return Joi.validate(request, registerSchema);
  },
  loginValidation: request => {
    const loginSchema = {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    };
    return Joi.validate(request, loginSchema);
  }
};
