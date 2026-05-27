const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');

exports.getAuthorities = asyncHandler(async (req, res) => {
    const authorities = await req.app.locals.repositories.authority.findAll();
    return successResponse(res, 'Authorities retrieved successfully', authorities);
});

exports.getAuthorityById = asyncHandler(async (req, res) => {
    const authority = await req.app.locals.repositories.authority.findById(req.params.authorityId);
    if (!authority) {
        return res.status(404).json({ success: false, message: 'Authority not found' });
    }
    return successResponse(res, 'Authority retrieved successfully', authority);
});

exports.getAuthorityIssues = asyncHandler(async (req, res) => {
    const { authorityId } = req.params;
    const { status } = req.query; // optional filter

    const { db } = require('../config/firebase.config');
    const Issue = require('../models/issue.model');
    
    // 1. Get issue IDs linked to this authority
    const authIssuesSnapshot = await db.ref(`authorities/${authorityId}/issues`).once('value');
    const authIssues = authIssuesSnapshot.val();
    
    if (!authIssues) {
        return successResponse(res, 'No issues found for this authority', []);
    }
    
    const issueIds = Object.keys(authIssues);
    
    // 2. Fetch the actual issues
    const issuesRef = db.ref('issues');
    const promises = issueIds.map(id => issuesRef.child(id).once('value'));
    const snapshots = await Promise.all(promises);
    
    let issues = snapshots
        .filter(snap => snap.exists())
        .map(snap => new Issue(snap.val()));
        
    // 3. Filter if requested (e.g., status=reported or status!=reported depending on use case)
    if (status) {
        issues = issues.filter(issue => issue.status === status);
    }
    
    return successResponse(res, 'Authority issues retrieved', issues);
});
