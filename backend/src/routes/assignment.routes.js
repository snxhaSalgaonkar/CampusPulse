const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignment.controller');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

router.use(authenticate);
router.use(authorizeRoles('admin'));

router.get('/', assignmentController.getAssignments);
router.get('/issue/:issueId', assignmentController.getIssueAssignments);

module.exports = router;
