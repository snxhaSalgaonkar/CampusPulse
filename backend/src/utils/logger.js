const winston = require('winston');
const config = require('../config/env.config');

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    config.nodeEnv === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
        return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
    })
);

const logger = winston.createLogger({
    level: config.nodeEnv === 'development' ? 'debug' : 'info',
    format,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

module.exports = logger;
