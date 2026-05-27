const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const config = require('../config/env.config');

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window`
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: {
        success: false,
        message: 'Too many requests, please try again later'
    },
});

const setupSecurity = (app) => {
    // Set security HTTP headers
    app.use(helmet());

    // CORS configuration
    app.use(
        cors({
            origin: config.clientUrl,
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        })
    );

    // Apply rate limiter to all requests under /api
    app.use('/api', limiter);
};

module.exports = setupSecurity;
