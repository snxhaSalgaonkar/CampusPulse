const BaseService = require('./base.service');
const InvalidVoteError = require('../utils/errors/business/InvalidVoteError');

class VoteService extends BaseService {
    async addVote(issueId, userId, issueRepository, voteRepository) {
        const issue = await issueRepository.findById(issueId);
        if (!issue) throw new Error('Issue not found');
        if (issue.userId === userId) throw new InvalidVoteError('Cannot vote on your own issue.');

        const alreadyVoted = await this.hasUserAlreadyVoted(issueId, userId, voteRepository);
        if (alreadyVoted) throw new InvalidVoteError('User can upvote only once.');

        return await voteRepository.create({
            issueId,
            userId,
            createdAt: this.getCurrentTimestamp()
        });
    }

    async removeVote(issueId, userId, voteRepository) {
        const vote = await voteRepository.findByUserAndIssue(userId, issueId);
        if (!vote) throw new InvalidVoteError('Vote does not exist.');
        return await voteRepository.remove(vote.id);
    }

    async hasUserAlreadyVoted(issueId, userId, voteRepository) {
        const vote = await voteRepository.findByUserAndIssue(userId, issueId);
        return !!vote;
    }
}

module.exports = VoteService;
