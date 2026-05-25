const Joi = require('joi');

exports.assignIssueSchema = Joi.object({
    assigneeId: Joi.string().required()
});
