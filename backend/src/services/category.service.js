const BaseService = require('./base.service');
const IssuePriority = require('../utils/constants/issuePriority');

class CategoryService extends BaseService {
    validateCategory(categoryId, availableCategories) {
        const exists = availableCategories.some(cat => cat.id === categoryId);
        if (!exists) throw new Error('Invalid category specified.');
        return true;
    }

    getDefaultPriority(categoryName) {
        const highPriorityCategories = ['SAFETY', 'INFRASTRUCTURE', 'MEDICAL'];
        return highPriorityCategories.includes(categoryName.toUpperCase())
            ? IssuePriority.HIGH
            : IssuePriority.MEDIUM;
    }

    mapCategoryMetadata(category) {
        return {
            categoryId: category.id,
            name: category.name,
            departmentQueue: category.departmentId,
            requiresApproval: category.isSensitive || false
        };
    }
}

module.exports = CategoryService;
