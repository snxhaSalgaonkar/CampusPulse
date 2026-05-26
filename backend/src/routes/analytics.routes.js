const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analytics.controller');
const { protect, authorizeRoles } = require('../middleware/auth.middleware');

router.use(protect);
router.use(authorizeRoles('admin'));

router.get('/dashboard', analyticsController.getDashboardMetrics);
router.get('/categories', analyticsController.getCategoryAnalytics);
router.get('/hotspots', analyticsController.getHotspots);

module.exports = router;
