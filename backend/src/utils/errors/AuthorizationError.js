const AppError = require('./AppError');

class AuthorizationError extends AppError {
    constructor(message = 'Not authorized to perform this action') {
        super(message, 403);
        this.name = 'AuthorizationError';
    }
}

module.exports = AuthorizationError;
