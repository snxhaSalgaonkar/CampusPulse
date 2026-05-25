const BaseService = require('./base.service');
const IssueStatus = require('../utils/constants/issueStatus');
const stringHelper = require('../utils/helpers/string.helper');

class CommentService extends BaseService {
    async addComment(issueId, commentData, issueRepository, commentRepository) {
        const issue = await issueRepository.findById(issueId);
        if (!issue) throw new Error('Issue not found');
        if (issue.status === IssueStatus.REJECTED) throw new Error('Cannot comment on rejected issues.');

        this.validateComment(commentData.text);

        const sanitizedText = this.sanitizeComment(commentData.text);

        return await commentRepository.create({
            issueId,
            userId: commentData.userId,
            text: sanitizedText,
            createdAt: this.getCurrentTimestamp()
        });
    }

    validateComment(text) {
        if (!text || text.trim().length === 0) throw new Error('Empty comments not allowed.');
        if (text.length > 500) throw new Error('Comment length exceeds 500 characters limit.');
    }

    sanitizeComment(text) {
        return stringHelper.sanitizeText(text);
    }
}

module.exports = CommentService;
