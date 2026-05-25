const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');
const AnalyticsService = require('../services/analytics.service');

const analyticsService = new AnalyticsService();

exports.getDashboardMetrics = asyncHandler(async (req, res) => {
    const metrics = await analyticsService.generateDashboardMetrics(req.app.locals.repositories.issue);
    return successResponse(res, 'Dashboard metrics retrieved', metrics);
});

exports.getCategoryAnalytics = asyncHandler(async (req, res) => {
    const analytics = await analyticsService.generateCategoryAnalytics(req.app.locals.repositories.issue);
    return successResponse(res, 'Category analytics retrieved', analytics);
});

exports.getHotspots = asyncHandler(async (req, res) => {
    return successResponse(res, 'Hotspots retrieved', []);
});
