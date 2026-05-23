const admin = require('firebase-admin');
const config = require('./env.config');
const logger = require('../utils/logger');

let db = null;

try {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: config.firebase.projectId,
                clientEmail: config.firebase.clientEmail,
                privateKey: config.firebase.privateKey,
            }),
            databaseURL: config.firebase.databaseUrl,
        });
        logger.info('Firebase Admin initialized successfully');
    }
    db = admin.database();
} catch (error) {
    logger.error('Firebase initialization error:', error);
    process.exit(1);
}

module.exports = { admin, db };
