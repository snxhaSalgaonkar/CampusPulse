const Joi = require('joi');

exports.registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid('user', 'admin', 'staff').required(),
    name: Joi.string().required()
});

exports.loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
