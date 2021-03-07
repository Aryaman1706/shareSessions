const Joi = require("joi");

// * Sign up
exports.signUp = (body) => {
  const schema = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
  });

  return schema.validate(body);
};

// * Login
exports.login = (body) => {
  const schema = Joi.object({
    username: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
  });

  return schema.validate(body);
};
