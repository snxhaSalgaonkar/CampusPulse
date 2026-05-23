const cloudinary = require('cloudinary').v2;
const config = require('./env.config');
const logger = require('../utils/logger');

try {
    cloudinary.config({
        cloud_name: config.cloudinary.cloudName,
        api_key: config.cloudinary.apiKey,
        api_secret: config.cloudinary.apiSecret,
    });
    logger.info('Cloudinary initialized successfully');
} catch (error) {
    logger.error('Cloudinary initialization error:', error);
}

module.exports = cloudinary;
