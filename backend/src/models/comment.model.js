const BaseModel = require('./base.model');
const { isRequired } = require('../utils/validators');

class Comment extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.commentId = data.commentId || this.generateId();
        this.issueId = data.issueId || '';
        this.user = data.user || null; // Expected Format: { uid, fullName, profileImage }
        this.message = data.message || '';
    }

    validate() {
        const errors = [];
        if (!isRequired(this.commentId)) errors.push('commentId is required');
        if (!isRequired(this.issueId)) errors.push('issueId is required');
        if (!isRequired(this.user)) errors.push('user object is required');
        if (!isRequired(this.message)) errors.push('message is required');
        return errors;
    }

    toJSON() {
        return {
            commentId: this.commentId,
            issueId: this.issueId,
            user: this.user,
            message: this.message,
            createdAt: this.createdAt
        };
    }
}

module.exports = Comment;
