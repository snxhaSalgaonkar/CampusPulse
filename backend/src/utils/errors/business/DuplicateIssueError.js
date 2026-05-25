class DuplicateIssueError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DuplicateIssueError';
    }
}
module.exports = DuplicateIssueError;
