const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');
const VoteService = require('../services/vote.service');

const voteService = new VoteService();

exports.addVote = asyncHandler(async (req, res) => {
    const vote = await voteService.addVote(
        req.params.issueId,
        req.user.id,
        req.app.locals.repositories.issue,
        req.app.locals.repositories.vote
    );
    return successResponse(res, 'Vote added successfully', vote, 201);
});

exports.removeVote = asyncHandler(async (req, res) => {
    await voteService.removeVote(
        req.params.issueId,
        req.user.id,
        req.app.locals.repositories.vote
    );
    return successResponse(res, 'Vote removed successfully');
});
