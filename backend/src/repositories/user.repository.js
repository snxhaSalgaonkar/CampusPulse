const { db } = require('../config/firebase.config');
const User = require('../models/user.model');

class UserRepository {
    constructor() {
        this.collectionName = 'users';
        this.ref = db.ref(this.collectionName);
    }

    async findByEmail(email) {
        const snapshot = await this.ref.orderByChild('email').equalTo(email).once('value');
        const val = snapshot.val();
        if (!val) return null;
        
        // Return the first match
        const key = Object.keys(val)[0];
        return new User(val[key]);
    }

    async create(userData) {
        const user = new User(userData);
        const errors = user.validate();
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.join(', ')}`);
        }
        
        await this.ref.child(user.uid).set(user.toJSON());
        return user;
    }
}

module.exports = UserRepository;
