const { db } = require('../config/firebase.config');
const Authority = require('../models/authority.model');

class AuthorityRepository {
    constructor() {
        this.collectionName = 'authorities';
        this.ref = db.ref(this.collectionName);
    }

    async findAll() {
        const snapshot = await this.ref.once('value');
        const val = snapshot.val();
        if (!val) return [];
        
        return Object.values(val).map(authData => new Authority(authData));
    }

    async findById(authorityId) {
        const snapshot = await this.ref.child(authorityId).once('value');
        const val = snapshot.val();
        if (!val) return null;
        return new Authority(val);
    }

    async create(authorityData) {
        const authority = new Authority(authorityData);
        const authorityJson = authority.toJSON();
        
        await this.ref.child(authority.authorityId).set(authorityJson);
        return authority;
    }
}

module.exports = AuthorityRepository;
