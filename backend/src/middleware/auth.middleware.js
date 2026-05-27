const { verifyToken } = require('../config/auth.config');
const AuthenticationError = require('../utils/errors/AuthenticationError');
const AuthorizationError = require('../utils/errors/AuthorizationError');
const asyncHandler = require('../utils/asyncHandler');
// Assuming user model exists or we query Firebase here
// const { db } = require('../config/firebase.config');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        throw new AuthenticationError('Invalid or expired token');
    }

    try {
        const decoded = verifyToken(token);

        // In a real scenario, fetch user from Firebase Realtime DB to attach to req.user
        // const userSnapshot = await db.ref(`users/${decoded.uid}`).once('value');
        // if (!userSnapshot.exists()) throw new AuthenticationError('User no longer exists.');
        // req.user = userSnapshot.val();

        req.user = decoded; // Temporary attachment until DB logic is added
        next();
    } catch (err) {
        throw new AuthenticationError('Invalid or expired token');
    }
});

const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            throw new AuthorizationError('Access denied');
        }
        next();
    };
};

module.exports = {
    protect,
    authorizeRoles,
};
