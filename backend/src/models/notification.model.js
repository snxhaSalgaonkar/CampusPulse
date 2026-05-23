const BaseModel = require('./base.model');
const { isRequired, isValidEnum } = require('../utils/validators');

class Notification extends BaseModel {
    static TYPES = ['issue_update', 'assignment', 'resolution', 'announcement'];

    constructor(data = {}) {
        super(data);
        this.notificationId = data.notificationId || this.generateId();
        this.userId = data.userId || '';
        this.title = data.title || '';
        this.message = data.message || '';
        this.type = data.type || 'announcement';
        this.issueId = data.issueId || null;
        this.isRead = data.isRead || false;
    }

    validate() {
        const errors = [];
        if (!isRequired(this.notificationId)) errors.push('notificationId is required');
        if (!isRequired(this.userId)) errors.push('userId is required');
        if (!isRequired(this.title)) errors.push('title is required');
        if (!isRequired(this.message)) errors.push('message is required');
        if (!isValidEnum(this.type, Notification.TYPES)) errors.push('Invalid notification type');
        return errors;
    }

    toJSON() {
        return {
            notificationId: this.notificationId,
            userId: this.userId,
            title: this.title,
            message: this.message,
            type: this.type,
            issueId: this.issueId,
            isRead: this.isRead,
            createdAt: this.createdAt
        };
    }
}

module.exports = Notification;
