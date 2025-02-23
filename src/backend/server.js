const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes with specific origin
const corsOptions = {
  origin: 'https://web-application-give.vercel.app', // Update to match your frontend's exact origin
  credentials: true, // Allow cookies/auth headers if needed
  methods: ['GET', 'POST', 'OPTIONS'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
};

app.use(cors(corsOptions));

// ... rest of your code (e.g., API routes, MongoDB connection, etc.) ...