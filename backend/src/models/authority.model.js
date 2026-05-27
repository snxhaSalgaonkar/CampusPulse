const BaseModel = require('./base.model');
const { isRequired } = require('../utils/validators');

class Authority extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.authorityId = data.authorityId || this.generateId();
        this.name = data.name || '';
        this.email = data.email || '';
        this.phone = data.phone || '';
    }

    validate() {
        const errors = [];
        if (!isRequired(this.authorityId)) errors.push('authorityId is required');
        if (!isRequired(this.name)) errors.push('name is required');
        return errors;
    }

    toJSON() {
        return {
            authorityId: this.authorityId,
            name: this.name,
            email: this.email,
            phone: this.phone,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = Authority;
