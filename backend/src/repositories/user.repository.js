const { db } = require('../config/firebase.config');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

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
        
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(userData.password, salt);
        
        // Save user data along with the hashed password
        const userJson = user.toJSON();
        userJson.passwordHash = passwordHash;
        
        await this.ref.child(user.uid).set(userJson);
        return user;
    }

    async verifyPassword(email, password) {
        const snapshot = await this.ref.orderByChild('email').equalTo(email).once('value');
        const val = snapshot.val();
        if (!val) return false;
        
        const key = Object.keys(val)[0];
        const userRecord = val[key];
        
        if (!userRecord.passwordHash) return false;
        
        // Compare provided password with hashed password in database
        return await bcrypt.compare(password, userRecord.passwordHash);
    }
}

module.exports = UserRepository;
