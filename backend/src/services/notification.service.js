const BaseService = require('./base.service');
const NotificationTypes = require('../utils/constants/notificationTypes');

class NotificationService extends BaseService {
    async createIssueNotification(issue, notificationRepository) {
        const payload = this.buildNotification(
            issue.userId,
            NotificationTypes.ISSUE_CREATED,
            `Your issue "${issue.title}" has been successfully reported.`,
            { issueId: issue.id }
        );
        return await notificationRepository.create(payload);
    }

    async createAssignmentNotification(issue, assigneeId, notificationRepository) {
        const payload = this.buildNotification(
            assigneeId,
            NotificationTypes.ISSUE_ASSIGNED,
            `You have been assigned to issue "${issue.title}".`,
            { issueId: issue.id }
        );
        return await notificationRepository.create(payload);
    }

    async createResolutionNotification(issue, notificationRepository) {
        const payload = this.buildNotification(
            issue.userId,
            NotificationTypes.ISSUE_RESOLVED,
            `Your issue "${issue.title}" has been resolved.`,
            { issueId: issue.id }
        );
        return await notificationRepository.create(payload);
    }

    buildNotification(userId, type, message, metadata = {}) {
        return {
            userId,
            type,
            message,
            metadata,
            isRead: false,
            createdAt: this.getCurrentTimestamp()
        };
    }
}

module.exports = NotificationService;
