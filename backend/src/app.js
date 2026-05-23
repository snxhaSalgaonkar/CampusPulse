const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const setupSecurity = require('./middleware/security.middleware');
const routes = require('./routes');
const errorHandler = require('./middleware/error.middleware');
const NotFoundError = require('./utils/errors/NotFoundError');
const { successResponse } = require('./utils/apiResponse');

const app = express();

// 1. Security Middleware
setupSecurity(app);

// 2. Body parsers and compression
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(compression());

// 3. Logger
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// 4. Health Check
app.get('/api/health', (req, res) => {
    successResponse(res, 200, 'Server is healthy', {
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// 5. API Routes
app.use('/api', routes);

// 6. 404 Handler
app.all('*', (req, res, next) => {
    next(new NotFoundError(`Can't find ${req.originalUrl} on this server!`));
});

// 7. Global Error Handler
app.use(errorHandler);

module.exports = app;
