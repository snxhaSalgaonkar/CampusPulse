const BaseModel = require('./base.model');
const { isRequired, isValidEnum } = require('../utils/validators');

class Issue extends BaseModel {
    static URGENCY_LEVELS = ['low', 'medium', 'high'];
    static STATUSES = ['reported', 'assigned', 'in_progress', 'resolved', 'rejected'];

    constructor(data = {}) {
        super(data);
        this.issueId = data.issueId || this.generateId();
        this.title = data.title || '';
        this.description = data.description || '';
        this.categoryId = data.categoryId || '';
        this.urgency = data.urgency || 'low';
        this.status = data.status || 'reported';
        this.reportedBy = data.reportedBy || '';
        this.assignedTo = data.assignedTo || null;
        this.location = data.location || { building: '', room: '', latitude: null, longitude: null };
        this.images = data.images || [];
        this.upvoteCount = data.upvoteCount || 0;
        this.commentCount = data.commentCount || 0;
        this.isResolved = data.isResolved || false;
        this.resolvedAt = data.resolvedAt || null;
    }

    validate() {
        const errors = [];
        if (!isRequired(this.issueId)) errors.push('issueId is required');
        if (!isRequired(this.title)) errors.push('title is required');
        if (!isRequired(this.description)) errors.push('description is required');
        if (!isRequired(this.categoryId)) errors.push('categoryId is required');
        if (!isRequired(this.reportedBy)) errors.push('reportedBy is required');
        if (!isValidEnum(this.urgency, Issue.URGENCY_LEVELS)) errors.push('Invalid urgency level');
        if (!isValidEnum(this.status, Issue.STATUSES)) errors.push('Invalid status');
        return errors;
    }

    validateStatusTransition(newStatus) {
        if (!isValidEnum(newStatus, Issue.STATUSES)) return false;
        // Cannot revert to reported from resolved natively 
        if (this.status === 'resolved' && newStatus === 'reported') return false;
        return true;
    }

    markResolved() {
        if (this.validateStatusTransition('resolved')) {
            this.status = 'resolved';
            this.isResolved = true;
            this.resolvedAt = new Date().toISOString();
            this.updateTimestamp();
            return true;
        }
        return false;
    }

    assignIssue(userId) {
        if (this.validateStatusTransition('assigned')) {
            this.assignedTo = userId;
            this.status = 'assigned';
            this.updateTimestamp();
            return true;
        }
        return false;
    }

    incrementVotes() {
        this.upvoteCount += 1;
        this.updateTimestamp();
    }

    toJSON() {
        return {
            issueId: this.issueId,
            title: this.title,
            description: this.description,
            categoryId: this.categoryId,
            urgency: this.urgency,
            status: this.status,
            reportedBy: this.reportedBy,
            assignedTo: this.assignedTo,
            location: this.location,
            images: this.images,
            upvoteCount: this.upvoteCount,
            commentCount: this.commentCount,
            isResolved: this.isResolved,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            resolvedAt: this.resolvedAt,
        };
    }
}

module.exports = Issue;
