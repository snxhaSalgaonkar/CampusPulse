require('dotenv').config({ path: '../.env' });
const { db } = require('../src/config/firebase.config');

const authorities = [
    {
        authorityId: "auth_estate",
        name: "Estate/Civil Dept",
        email: "estate@campuspulse.edu",
        phone: "1001"
    },
    {
        authorityId: "auth_electrical",
        name: "Electrical Dept",
        email: "electrical@campuspulse.edu",
        phone: "1002"
    },
    {
        authorityId: "auth_it",
        name: "IT/Network Dept",
        email: "it@campuspulse.edu",
        phone: "1003"
    },
    {
        authorityId: "auth_security",
        name: "Security Dept",
        email: "security@campuspulse.edu",
        phone: "1004"
    },
    {
        authorityId: "auth_housekeeping",
        name: "Housekeeping Dept",
        email: "housekeeping@campuspulse.edu",
        phone: "1005"
    },
    {
        authorityId: "auth_admin",
        name: "Admin Dept",
        email: "admin@campuspulse.edu",
        phone: "1006"
    },
    {
        authorityId: "auth_plumbing",
        name: "Plumbing Dept",
        email: "plumbing@campuspulse.edu",
        phone: "1007"
    },
    {
        authorityId: "auth_safety",
        name: "Safety Officer",
        email: "safety@campuspulse.edu",
        phone: "1008"
    }
];

async function seedAuthorities() {
    console.log('Seeding authorities...');
    const ref = db.ref('authorities');
    
    for (const auth of authorities) {
        const payload = {
            ...auth,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        await ref.child(auth.authorityId).set(payload);
        console.log(`Seeded authority: ${auth.name}`);
    }
    
    console.log('Finished seeding authorities.');
    process.exit(0);
}

seedAuthorities().catch(console.error);
