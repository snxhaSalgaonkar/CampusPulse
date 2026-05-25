const BaseService = require('./base.service');
const IssueStatus = require('../utils/constants/issueStatus');
const IssuePriority = require('../utils/constants/issuePriority');
const Roles = require('../utils/constants/roles');
const issueStateMachine = require('../utils/workflows/issueStateMachine');
const DuplicateIssueError = require('../utils/errors/business/DuplicateIssueError');
const dateHelper = require('../utils/helpers/date.helper');

class IssueService extends BaseService {
    async createIssue(issueData, issueRepository) {
        this.validateIssuePayload(issueData);

        const isDuplicate = await this.detectDuplicateIssues(issueData, issueRepository);
        if (isDuplicate) throw new DuplicateIssueError('A similar issue has already been reported.');

        const newIssue = {
            ...issueData,
            status: IssueStatus.REPORTED,
            priority: this.calculatePriority(issueData),
            createdAt: this.getCurrentTimestamp(),
            updatedAt: this.getCurrentTimestamp()
        };

        return await issueRepository.create(newIssue);
    }

    async updateIssueStatus(issueId, newStatus, issueRepository) {
        const issue = await issueRepository.findById(issueId);
        if (!issue) throw new Error('Issue not found');
        if (!this.canEditIssue(issue)) throw new Error('Resolved/rejected issues cannot be edited.');

        issueStateMachine.validateTransition(issue.status, newStatus);

        return await issueRepository.update(issueId, {
            ...issue,
            status: newStatus,
            updatedAt: this.getCurrentTimestamp()
        });
    }

    async assignIssue(issueId, assigneeId, adminUser, issueRepository) {
        if (adminUser.role !== Roles.ADMIN) throw new Error('Only admins can assign issues.');

        const issue = await issueRepository.findById(issueId);
        if (!issue) throw new Error('Issue not found');

        issueStateMachine.validateTransition(issue.status, IssueStatus.ASSIGNED);

        return await issueRepository.update(issueId, {
            ...issue,
            status: IssueStatus.ASSIGNED,
            assigneeId,
            updatedAt: this.getCurrentTimestamp()
        });
    }

    async detectDuplicateIssues(issueData, issueRepository) {
        const recentIssues = await issueRepository.findRecentByLocation(issueData.locationId);
        return recentIssues.some(issue => issue.categoryId === issueData.categoryId);
    }

    async escalateIssue(issueId, issueRepository) {
        const issue = await issueRepository.findById(issueId);
        if (!issue) throw new Error('Issue not found');
        if (!this.canEditIssue(issue)) throw new Error('Cannot escalate a resolved/rejected issue.');

        const hoursUnresolved = dateHelper.differenceInHours(this.getCurrentTimestamp(), issue.createdAt);
        if (hoursUnresolved > 48 && issue.priority !== IssuePriority.URGENT) {
            return await issueRepository.update(issueId, {
                priority: IssuePriority.URGENT,
                escalated: true,
                updatedAt: this.getCurrentTimestamp()
            });
        }
        return issue;
    }

    validateIssuePayload(payload) {
        this.validateRequiredFields(payload, ['title', 'description', 'locationId', 'categoryId']);
        if (payload.title.length < 5 || payload.title.length > 100) {
            throw new Error('Issue title length must be between 5 and 100 characters.');
        }
    }

    canEditIssue(issue) {
        return ![IssueStatus.RESOLVED, IssueStatus.REJECTED].includes(issue.status);
    }

    calculatePriority(issueData) {
        return issueData.isHighUrgency ? IssuePriority.HIGH : IssuePriority.MEDIUM;
    }
}

module.exports = IssueService;
