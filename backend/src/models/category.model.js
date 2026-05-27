const BaseModel = require('./base.model');
const { isRequired } = require('../utils/validators');

class Category extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.categoryId = data.categoryId || this.generateId();
        this.name = data.name || '';
        this.icon = data.icon || '';
        this.color = data.color || '#000000';
        this.defaultAuthorityId = data.defaultAuthorityId || '';
    }

    validate() {
        const errors = [];
        if (!isRequired(this.categoryId)) errors.push('categoryId is required');
        if (!isRequired(this.name)) errors.push('name is required');
        return errors;
    }

    toJSON() {
        return {
            categoryId: this.categoryId,
            name: this.name,
            icon: this.icon,
            color: this.color,
            defaultAuthorityId: this.defaultAuthorityId
        };
    }
}

module.exports = Category;
