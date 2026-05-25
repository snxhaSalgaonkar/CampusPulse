const IssueStatus = require('../constants/issueStatus');
const InvalidIssueStateError = require('../errors/business/InvalidIssueStateError');

const ALLOWED_TRANSITIONS = {
    [IssueStatus.REPORTED]: [IssueStatus.ASSIGNED],
    [IssueStatus.ASSIGNED]: [IssueStatus.IN_PROGRESS],
    [IssueStatus.IN_PROGRESS]: [IssueStatus.RESOLVED, IssueStatus.REJECTED],
    [IssueStatus.RESOLVED]: [],
    [IssueStatus.REJECTED]: []
};

function validateTransition(currentState, nextState) {
    const allowed = ALLOWED_TRANSITIONS[currentState];
    if (!allowed || !allowed.includes(nextState)) {
        throw new InvalidIssueStateError(`Cannot transition from ${currentState} to ${nextState}`);
    }
    return true;
}

module.exports = { validateTransition, ALLOWED_TRANSITIONS };
