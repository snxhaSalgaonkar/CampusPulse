// const express = require('express');
// const router = express.Router();
// const { successResponse } = require('../utils/apiResponse');

// router.get('/', (req, res) => {
//     successResponse(res, 200, 'Issues list placeholder');
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue.controller');
const validate = require('../middleware/validate.middleware');
const { createIssueSchema, updateStatusSchema, assignIssueSchema } = require('../validations/issue.validation');
const { uploadIssueImages } = require('../middleware/upload.middleware');
// Assuming auth middlewares exist
const { protect, authorizeRoles } = require('../middleware/auth.middleware');

router.use(protect); // Protect all issue routes

router.route('/')
    .post(validate(createIssueSchema), issueController.createIssue)
    .get(issueController.getIssues);

router.route('/:issueId')
    .get(issueController.getIssueById);

// Status update
router.patch('/:issueId/status', validate(updateStatusSchema), issueController.updateIssueStatus);

// Admin assign route
router.post('/:issueId/assign', authorizeRoles('admin'), validate(assignIssueSchema), issueController.assignIssue);

// Image uploads
router.post('/:issueId/images', uploadIssueImages, issueController.uploadImages);

module.exports = router;

