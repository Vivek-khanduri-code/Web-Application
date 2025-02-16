const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://vercel-admin-user:Nexr-3223@cluster0.bbprk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('DB_UNIQUE_FROM'); // Replace with your database name
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    throw err;
  }
}

module.exports = { connect };