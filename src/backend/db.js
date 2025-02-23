const mongoose = require('mongoose');

// Use environment variable for security
const uri = process.env.MONGODB_URI; // Remove the fallback for production

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