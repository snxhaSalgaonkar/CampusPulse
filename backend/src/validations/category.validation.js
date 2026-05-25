const Joi = require('joi');

exports.createCategorySchema = Joi.object({
    name: Joi.string().required(),
    departmentId: Joi.string().required(),
    isSensitive: Joi.boolean().optional()
});

exports.updateCategorySchema = Joi.object({
    name: Joi.string().optional(),
    departmentId: Joi.string().optional(),
    isSensitive: Joi.boolean().optional()
});
