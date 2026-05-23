require('dotenv').config(); // Load variables first
const app = require('./app');
const config = require('./config/env.config');
const logger = require('./utils/logger');
require('./config/firebase.config'); // Initialize Firebase

// Handle Uncaught Exceptions
process.on('uncaughtException', (err) => {
    logger.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    logger.error(err.name, err.message, err.stack);
    process.exit(1);
});

const server = app.listen(config.port, () => {
    logger.info(`Server running in ${config.nodeEnv} mode on port ${config.port}`);
});

// Handle Unhandled Promise Rejections
process.on('unhandledRejection', (err) => {
    logger.error('UNHANDLED REJECTION! 💥 Shutting down...');
    logger.error(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

// Graceful Shutdown (SIGTERM)
process.on('SIGTERM', () => {
    logger.info('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        logger.info('💥 Process terminated!');
    });
});
