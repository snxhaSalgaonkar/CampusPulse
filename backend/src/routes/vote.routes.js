const express = require('express');
const router = express.Router();
const voteController = require('../controllers/vote.controller');
const { protect } = require('../middleware/auth.middleware');

router.use(protect);

router.route('/:issueId')
    .post(voteController.addVote)
    .delete(voteController.removeVote);

module.exports = router;
