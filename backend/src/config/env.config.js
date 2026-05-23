require('dotenv').config();

const requiredEnvs = [
    'PORT', 'JWT_SECRET', 'FIREBASE_PROJECT_ID',
    'FIREBASE_PRIVATE_KEY', 'FIREBASE_CLIENT_EMAIL', 'FIREBASE_DATABASE_URL'
];

requiredEnvs.forEach((env) => {
    if (!process.env[env]) {
        console.error(`FATAL ERROR: Environment variable ${env} is missing.`);
        process.exit(1);
    }
});

module.exports = {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    },
    firebase: {
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        databaseUrl: process.env.FIREBASE_DATABASE_URL,
    },
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
    }
};
