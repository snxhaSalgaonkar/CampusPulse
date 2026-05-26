const ValidationError = require('../utils/errors/ValidationError');

const validate = (schema) => (req, res, next) => {
    try {
        // If using a library like Joi or Zod later, this is where the execution happens
        // For now, this is a placeholder wrapper that custom schemas can tap into
        if (schema.body && typeof schema.body.validate === 'function') {
            const { error } = schema.body.validate(req.body);
            if (error) throw new ValidationError(error.details[0].message);
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = validate;

// const { errorResponse } = require('../utils/apiResponse');

// const validate = (schema, property = 'body') => (req, res, next) => {
//     const { error } = schema.validate(req[property], { abortEarly: false });
//     if (error) {
//         const errors = error.details.map(err => err.message);
//         return errorResponse(res, 'Validation failed', errors, 422);
//     }
//     next();
// };

// module.exports = validate;

