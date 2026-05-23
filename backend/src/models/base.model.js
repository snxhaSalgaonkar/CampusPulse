const crypto = require('crypto');

class BaseModel {
    constructor(data = {}) {
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
    }

    generateId() {
        return crypto.randomUUID();
    }

    updateTimestamp() {
        this.updatedAt = new Date().toISOString();
    }

    sanitize(data, allowedFields) {
        const sanitized = {};
        for (const key of allowedFields) {
            if (data[key] !== undefined) {
                sanitized[key] = data[key];
            }
        }
        return sanitized;
    }

    toJSON() {
        return { ...this };
    }
}

module.exports = BaseModel;
