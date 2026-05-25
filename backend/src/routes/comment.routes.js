const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const { authenticate } = require('../middleware/auth.middleware');

router.use(authenticate);

router.route('/:issueId')
    .post(commentController.addComment)
    .get(commentController.getComments);

module.exports = router;
