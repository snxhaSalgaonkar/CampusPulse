const Joi = require('joi');

exports.createIssueSchema = Joi.object({
    title: Joi.string().min(5).max(100).required(),
    description: Joi.string().required(),
    locationId: Joi.string().required(),
    categoryId: Joi.string().required(),
    isHighUrgency: Joi.boolean().optional()
});

exports.updateStatusSchema = Joi.object({
    status: Joi.string().valid('reported', 'assigned', 'in_progress', 'resolved', 'rejected').required()
});

exports.assignIssueSchema = Joi.object({
    assigneeId: Joi.string().required()
});
