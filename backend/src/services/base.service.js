const dateHelper = require('../utils/helpers/date.helper');

class BaseService {
    getCurrentTimestamp() {
        return dateHelper.getCurrentTimestamp();
    }

    getPagination(page = 1, limit = 10) {
        return {
            skip: (page - 1) * limit,
            limit
        };
    }

    validateRequiredFields(payload, fields) {
        const missing = fields.filter(field => payload[field] === undefined || payload[field] === null);
        if (missing.length > 0) {
            throw new Error(`Missing required fields: ${missing.join(', ')}`);
        }
    }
}

module.exports = BaseService;
