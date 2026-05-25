const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');
const CommentService = require('../services/comment.service');

const commentService = new CommentService();

exports.addComment = asyncHandler(async (req, res) => {
    const commentData = { ...req.body, userId: req.user.id };
    const comment = await commentService.addComment(
        req.params.issueId,
        commentData,
        req.app.locals.repositories.issue,
        req.app.locals.repositories.comment
    );
    return successResponse(res, 'Comment added successfully', comment, 201);
});

exports.getComments = asyncHandler(async (req, res) => {
    const comments = await req.app.locals.repositories.comment.findByIssueId(req.params.issueId);
    return successResponse(res, 'Comments retrieved', comments);
});
