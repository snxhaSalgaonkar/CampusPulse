const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');
const IssueService = require('../services/issue.service');
const QueryFeatures = require('../utils/queryFeatures');

const issueService = new IssueService();

exports.createIssue = asyncHandler(async (req, res) => {
    // Note: req.app.locals.repositories is injected at app startup
    const issue = await issueService.createIssue(req.body, req.app.locals.repositories.issue);
    return successResponse(res, 'Issue created successfully', issue, 201);
});

exports.getIssues = asyncHandler(async (req, res) => {
    const features = new QueryFeatures({}, req.query).paginate();
    // Pass pagination/filters to your repository here
    const issues = await req.app.locals.repositories.issue.findAll(features);
    const total = await req.app.locals.repositories.issue.count();

    return successResponse(res, 'Issues retrieved', issues, 200, features.getPaginationMeta(total));
});

exports.getIssueById = asyncHandler(async (req, res) => {
    const issue = await req.app.locals.repositories.issue.findById(req.params.issueId);
    return successResponse(res, 'Issue retrieved successfully', issue);
});

exports.updateIssueStatus = asyncHandler(async (req, res) => {
    const issue = await issueService.updateIssueStatus(
        req.params.issueId,
        req.body.status,
        req.app.locals.repositories.issue
    );
    return successResponse(res, 'Issue status updated successfully', issue);
});

exports.assignIssue = asyncHandler(async (req, res) => {
    const issue = await issueService.assignIssue(
        req.params.issueId,
        req.body.assigneeId,
        req.user, // provided by auth middleware
        req.app.locals.repositories.issue
    );
    return successResponse(res, 'Issue assigned successfully', issue);
});

exports.uploadImages = asyncHandler(async (req, res) => {
    // Normally you'd pass req.files to a cloud storage service here
    const uploadedFiles = req.files.map(file => file.originalname);
    return successResponse(res, 'Images processed', { files: uploadedFiles });
});
