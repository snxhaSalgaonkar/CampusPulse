const express = require('express');
const router = express.Router();
const voteController = require('../controllers/vote.controller');
const { authenticate } = require('../middleware/auth.middleware');

router.use(authenticate);

router.route('/:issueId')
    .post(voteController.addVote)
    .delete(voteController.removeVote);

module.exports = router;
