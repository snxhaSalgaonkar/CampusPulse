const express = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const issueRoutes = require('./issue.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/issues', issueRoutes);

module.exports = router;
