const Joi = require('joi');

exports.addCommentSchema = Joi.object({
    text: Joi.string().max(500).required()
});
