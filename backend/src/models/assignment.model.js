const BaseModel = require('./base.model');
const { isRequired } = require('../utils/validators');

class Assignment extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.assignmentId = data.assignmentId || this.generateId();
        this.issueId = data.issueId || '';
        this.assignedBy = data.assignedBy || '';
        this.assignedTo = data.assignedTo || '';
        this.previousStatus = data.previousStatus || '';
        this.newStatus = data.newStatus || '';
        this.note = data.note || '';
    }

    validate() {
        const errors = [];
        if (!isRequired(this.assignmentId)) errors.push('assignmentId is required');
        if (!isRequired(this.issueId)) errors.push('issueId is required');
        if (!isRequired(this.assignedBy)) errors.push('assignedBy is required');
        if (!isRequired(this.assignedTo)) errors.push('assignedTo is required');
        return errors;
    }

    toJSON() {
        return {
            assignmentId: this.assignmentId,
            issueId: this.issueId,
            assignedBy: this.assignedBy,
            assignedTo: this.assignedTo,
            previousStatus: this.previousStatus,
            newStatus: this.newStatus,
            note: this.note,
            createdAt: this.createdAt
        };
    }
}

module.exports = Assignment;
