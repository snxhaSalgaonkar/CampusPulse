const BaseModel = require('./base.model');
const { isRequired } = require('../utils/validators');

class Vote extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.issueId = data.issueId || '';
        this.userId = data.userId || '';
        this.votedAt = data.votedAt || new Date().toISOString();
    }

    validate() {
        const errors = [];
        if (!isRequired(this.issueId)) errors.push('issueId is required');
        if (!isRequired(this.userId)) errors.push('userId is required');
        return errors;
    }

    // Static helper to prevent duplicate votes (used as Firebase compound key reference)
    static generateVoteId(issueId, userId) {
        return `${issueId}_${userId}`;
    }

    toJSON() {
        return {
            issueId: this.issueId,
            userId: this.userId,
            votedAt: this.votedAt
        };
    }
}

module.exports = Vote;
