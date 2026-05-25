const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');

exports.getAssignments = asyncHandler(async (req, res) => {
    const assignments = await req.app.locals.repositories.assignment.findAll();
    return successResponse(res, 'Assignments retrieved', assignments);
});

exports.getIssueAssignments = asyncHandler(async (req, res) => {
    const assignments = await req.app.locals.repositories.assignment.findByIssueId(req.params.issueId);
    return successResponse(res, 'Issue assignments retrieved', assignments);
});
