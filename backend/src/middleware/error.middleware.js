const config = require('../config/env.config');
const logger = require('../utils/logger');
const { errorResponse } = require('../utils/apiResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    // Log error for developers
    logger.error(err.stack);

    // JWT Errors
    if (err.name === 'JsonWebTokenError') {
        error.message = 'Invalid token. Please log in again.';
        error.statusCode = 401;
    }
    if (err.name === 'TokenExpiredError') {
        error.message = 'Your token has expired. Please log in again.';
        error.statusCode = 401;
    }

    // Send response
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';

    if (config.nodeEnv === 'development') {
        return res.status(statusCode).json({
            success: false,
            error: err,
            message,
            stack: err.stack,
        });
    }

    // Production Error Response (hide stack trace)
    if (err.isOperational) {
        return errorResponse(res, statusCode, message);
    }

    // Programming or other unknown error: don't leak error details
    logger.error('ERROR 💥', err);
    return errorResponse(res, 500, 'Something went very wrong!');
};

module.exports = errorHandler;
