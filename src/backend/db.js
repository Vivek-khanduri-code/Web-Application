const mongoose = require('mongoose');

// Use environment variable for security
const url = process.env.MONGODB_URI || 'mongodb+srv://vercel-admin-user:7SFnV63zdFMl3PtH@cluster0.bbprk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

module.exports = connect;