const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const issueRoutes = require('./issue.routes');
const commentRoutes = require('./comment.routes');
const voteRoutes = require('./vote.routes');
const notificationRoutes = require('./notification.routes');
const assignmentRoutes = require('./assignment.routes');
const analyticsRoutes = require('./analytics.routes');
const categoryRoutes = require('./category.routes');
const locationRoutes = require('./location.routes');

// Version 1 API Routes Map
router.use('/auth', authRoutes);
router.use('/issues', issueRoutes);
router.use('/comments', commentRoutes);
router.use('/votes', voteRoutes);
router.use('/notifications', notificationRoutes);
router.use('/assignments', assignmentRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/categories', categoryRoutes);
router.use('/locations', locationRoutes);

module.exports = router;
