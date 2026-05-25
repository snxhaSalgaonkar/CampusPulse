class InvalidVoteError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidVoteError';
    }
}
module.exports = InvalidVoteError;
