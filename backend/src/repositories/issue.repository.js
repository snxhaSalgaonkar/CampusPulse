const { db } = require('../config/firebase.config');
const Issue = require('../models/issue.model');

class IssueRepository {
    constructor() {
        this.collectionName = 'issues';
        this.ref = db.ref(this.collectionName);
    }

    async findAll(features) {
        // Basic fetch all, pagination features can be applied on the client or later
        const snapshot = await this.ref.once('value');
        const val = snapshot.val();
        if (!val) return [];
        
        return Object.values(val).map(issueData => new Issue(issueData));
    }

    async count() {
        const snapshot = await this.ref.once('value');
        const val = snapshot.val();
        return val ? Object.keys(val).length : 0;
    }

    async findById(issueId) {
        const snapshot = await this.ref.child(issueId).once('value');
        const val = snapshot.val();
        if (!val) return null;
        return new Issue(val);
    }

    async create(issueData) {
        const issue = new Issue(issueData);
        
        const issueJson = issue.toJSON();
        
        await this.ref.child(issue.issueId).set(issueJson);
        return issue;
    }

    async update(issueId, updateData) {
        await this.ref.child(issueId).update(updateData);
        const snapshot = await this.ref.child(issueId).once('value');
        return new Issue(snapshot.val());
    }

    async findRecentByLocation(locationId) {
        // Stub for duplicate check
        return [];
    }
}

module.exports = IssueRepository;
