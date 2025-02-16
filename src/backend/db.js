const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://vercel-admin-user:Wexr-3223@clustere.bbprk.mongodb.net/DB_UNIQUE_FROM?retryWrites=true&w=majority';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('DB_UNIQUE_FROM'); // replace with your database name
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        throw err;
    }
}

module.exports = { connect };