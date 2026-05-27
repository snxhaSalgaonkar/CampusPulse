require('dotenv').config({ path: '../.env' });
const { db } = require('../src/config/firebase.config');

const categories = [
    {
        categoryId: "cat_infrastructure",
        name: "Infrastructure",
        icon: "building",
        color: "#FFA500",
        defaultAuthorityId: "auth_estate"
    },
    {
        categoryId: "cat_sanitation",
        name: "Sanitation",
        icon: "trash",
        color: "#008000",
        defaultAuthorityId: "auth_housekeeping"
    },
    {
        categoryId: "cat_facility",
        name: "Facility",
        icon: "tools",
        color: "#808080",
        defaultAuthorityId: "auth_admin"
    },
    {
        categoryId: "cat_safety",
        name: "Safety",
        icon: "shield",
        color: "#FF0000",
        defaultAuthorityId: "auth_safety"
    },
    {
        categoryId: "cat_hygiene",
        name: "Hygiene",
        icon: "leaf",
        color: "#00FF00",
        defaultAuthorityId: "auth_housekeeping"
    },
    {
        categoryId: "cat_electrical",
        name: "Electrical",
        icon: "zap",
        color: "#FFFF00",
        defaultAuthorityId: "auth_electrical"
    },
    {
        categoryId: "cat_network",
        name: "Network & IT",
        icon: "wifi",
        color: "#0000FF",
        defaultAuthorityId: "auth_it"
    },
    {
        categoryId: "cat_plumbing",
        name: "Plumbing",
        icon: "droplet",
        color: "#00FFFF",
        defaultAuthorityId: "auth_plumbing"
    },
    {
        categoryId: "cat_security",
        name: "Security",
        icon: "lock",
        color: "#000000",
        defaultAuthorityId: "auth_security"
    }
];

async function seedCategories() {
    console.log('Seeding categories...');
    const ref = db.ref('categories');
    
    for (const cat of categories) {
        const payload = {
            ...cat,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        await ref.child(cat.categoryId).set(payload);
        console.log(`Seeded category: ${cat.name} mapped to ${cat.defaultAuthorityId}`);
    }
    
    console.log('Finished seeding categories.');
    process.exit(0);
}

seedCategories().catch(console.error);
