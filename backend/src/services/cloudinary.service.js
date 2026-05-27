const cloudinary = require('../config/cloudinary.config');
const stream = require('stream');

class CloudinaryService {
    /**
     * Uploads a buffer directly to Cloudinary using a stream.
     * @param {Buffer} buffer - The image buffer from multer
     * @param {String} folder - The cloudinary folder to upload to
     * @returns {Promise<String>} - The secure URL of the uploaded image
     */
    async uploadImageBuffer(buffer, folder = 'campus_pulse/issues') {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: folder },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result.secure_url);
                }
            );

            // Convert buffer to stream and pipe it to Cloudinary
            const bufferStream = new stream.PassThrough();
            bufferStream.end(buffer);
            bufferStream.pipe(uploadStream);
        });
    }
}

module.exports = new CloudinaryService();
