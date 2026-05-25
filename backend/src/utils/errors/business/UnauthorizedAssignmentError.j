class UnauthorizedAssignmentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedAssignmentError';
  }
}
module.exports = UnauthorizedAssignmentError;
