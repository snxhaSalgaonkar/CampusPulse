const BaseService = require('./base.service');
const Roles = require('../utils/constants/roles');
const IssueStatus = require('../utils/constants/issueStatus');
const UnauthorizedAssignmentError = require('../utils/errors/business/UnauthorizedAssignmentError');

class AssignmentService extends BaseService {
    async assignIssue(issueId, assigneeId, adminUser, issueRepository, assignmentRepository) {
        this.validateAssignment(adminUser);

        const issue = await issueRepository.findById(issueId);
        if (!issue) throw new Error('Issue not found');
        if ([IssueStatus.RESOLVED, IssueStatus.REJECTED].includes(issue.status)) {
            throw new Error('Only unresolved issues are assignable.');
        }

        const logEntry = this.generateAssignmentLog(issueId, assigneeId, adminUser.id);
        await assignmentRepository.createLog(logEntry);

        // Actual assignment state update logic usually delegates to IssueService or handles it here
        return await issueRepository.update(issueId, {
            assigneeId,
            status: IssueStatus.ASSIGNED,
            updatedAt: this.getCurrentTimestamp()
        });
    }

    validateAssignment(adminUser) {
        if (adminUser.role !== Roles.ADMIN) {
            throw new UnauthorizedAssignmentError('Only admin can assign issues.');
        }
    }

    generateAssignmentLog(issueId, assigneeId, assignedBy) {
        return {
            issueId,
            assigneeId,
            assignedBy,
            assignedAt: this.getCurrentTimestamp()
        };
    }
}

module.exports = AssignmentService;
