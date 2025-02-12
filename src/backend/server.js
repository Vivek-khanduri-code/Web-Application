require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(bodyParser.json()); // Parse JSON data

// Form submission endpoint
app.post('/api/submit', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);

  // In a real app, you can store formData in a database like MongoDB or PostgreSQL
  res.json({ message: 'Form submitted successfully', data: formData });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
