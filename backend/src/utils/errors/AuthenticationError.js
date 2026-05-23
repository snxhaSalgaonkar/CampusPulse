const AppError = require('./AppError');

class AuthenticationError extends AppError {
    constructor(message = 'Not authenticated to perform this action') {
        super(message, 401);
        this.name = 'AuthenticationError';
    }
}

module.exports = AuthenticationError;
