const { db } = require('../config/firebase.config');
const Category = require('../models/category.model');

class CategoryRepository {
    constructor() {
        this.collectionName = 'categories';
        this.ref = db.ref(this.collectionName);
    }

    async findAll() {
        const snapshot = await this.ref.once('value');
        const val = snapshot.val();
        if (!val) return [];
        return Object.values(val).map(catData => new Category(catData));
    }

    async findById(categoryId) {
        const snapshot = await this.ref.child(categoryId).once('value');
        const val = snapshot.val();
        if (!val) return null;
        return new Category(val);
    }

    async create(categoryData) {
        const category = new Category(categoryData);
        const categoryJson = category.toJSON();
        
        await this.ref.child(category.categoryId).set(categoryJson);
        return category;
    }

    async update(categoryId, updateData) {
        await this.ref.child(categoryId).update(updateData);
        const snapshot = await this.ref.child(categoryId).once('value');
        return new Category(snapshot.val());
    }

    async delete(categoryId) {
        await this.ref.child(categoryId).remove();
        return true;
    }
}

module.exports = CategoryRepository;
