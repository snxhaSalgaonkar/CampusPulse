const BaseService = require('./base.service');
const IssueStatus = require('../utils/constants/issueStatus');
const IssuePriority = require('../utils/constants/issuePriority');
const Roles = require('../utils/constants/roles');
const issueStateMachine = require('../utils/workflows/issueStateMachine');
const DuplicateIssueError = require('../utils/errors/business/DuplicateIssueError');
const dateHelper = require('../utils/helpers/date.helper');

class IssueService extends BaseService {
    async createIssue(issueData, repositories) {
        this.validateIssuePayload(issueData);

        // Fetch category to validate and get default authority
        let categoryRepository;
        let authorityRepository;
        let issueRepository;
        
        if (repositories && repositories.issue) {
            issueRepository = repositories.issue;
            categoryRepository = repositories.category || new (require('../repositories/category.repository'))();
            authorityRepository = repositories.authority;
        } else {
            // fallback if someone still passes issueRepository directly (e.g. tests)
            issueRepository = repositories;
            categoryRepository = new (require('../repositories/category.repository'))();
            authorityRepository = new (require('../repositories/authority.repository'))();
        }

        const category = await categoryRepository.findById(issueData.categoryId);
        if (!category) {
            const ValidationError = require('../utils/errors/ValidationError');
            throw new ValidationError('Invalid category selected');
        }

        const isDuplicate = await this.detectDuplicateIssues(issueData, issueRepository);
        if (isDuplicate) throw new DuplicateIssueError('A similar issue has already been reported.');

        // Fetch mapped authority
        const authority = await authorityRepository.findById(category.defaultAuthorityId);
        
        const newIssue = {
            ...issueData,
            status: IssueStatus.REPORTED,
            priority: this.calculatePriority(issueData),
            assignedAuthority: authority ? {
                authorityId: authority.authorityId,
                name: authority.name
            } : null,
            assignmentSource: 'category_mapping',
            createdAt: this.getCurrentTimestamp(),
            updatedAt: this.getCurrentTimestamp()
        };

        const createdIssue = await issueRepository.create(newIssue);

        // Prepend/append the issue to the authority's issues list in Firebase
        if (authority) {
            const { db } = require('../config/firebase.config');
            await db.ref(`authorities/${authority.authorityId}/issues/${createdIssue.issueId}`).set(true);
        }

        return createdIssue;
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

    async addImagesToIssue(issueId, imageUrls, issueRepository) {
        const issue = await issueRepository.findById(issueId);
        if (!issue) throw new Error('Issue not found');

        const updatedImages = [...(issue.images || []), ...imageUrls];

        return await issueRepository.update(issueId, {
            images: updatedImages,
            updatedAt: this.getCurrentTimestamp()
        });
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
