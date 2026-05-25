const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');

exports.getCategories = asyncHandler(async (req, res) => {
    const categories = await req.app.locals.repositories.category.findAll();
    return successResponse(res, 'Categories retrieved', categories);
});

exports.createCategory = asyncHandler(async (req, res) => {
    const category = await req.app.locals.repositories.category.create(req.body);
    return successResponse(res, 'Category created successfully', category, 201);
});

exports.updateCategory = asyncHandler(async (req, res) => {
    const category = await req.app.locals.repositories.category.update(req.params.categoryId, req.body);
    return successResponse(res, 'Category updated successfully', category);
});

exports.deleteCategory = asyncHandler(async (req, res) => {
    await req.app.locals.repositories.category.delete(req.params.categoryId);
    return successResponse(res, 'Category deleted successfully');
});
