class InvalidIssueStateError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidIssueStateError';
    }
}
module.exports = InvalidIssueStateError;
