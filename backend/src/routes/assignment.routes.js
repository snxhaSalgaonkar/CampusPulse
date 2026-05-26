const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignment.controller');
const { protect, authorizeRoles } = require('../middleware/auth.middleware');

router.use(protect);
router.use(authorizeRoles('admin'));

router.get('/', assignmentController.getAssignments);
router.get('/issue/:issueId', assignmentController.getIssueAssignments);

module.exports = router;
