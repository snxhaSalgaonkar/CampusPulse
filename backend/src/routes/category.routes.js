const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const validate = require('../middleware/validate.middleware');
const { createCategorySchema, updateCategorySchema } = require('../validations/category.validation');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

router.get('/', categoryController.getCategories);

router.use(authenticate);
router.use(authorizeRoles('admin'));

router.post('/', validate(createCategorySchema), categoryController.createCategory);
router.route('/:categoryId')
    .patch(validate(updateCategorySchema), categoryController.updateCategory)
    .delete(categoryController.deleteCategory);

module.exports = router;
